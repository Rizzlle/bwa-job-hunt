import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const filterCategory =
		searchParams.get("category") !== ""
			? searchParams.get("category")?.split(",")
			: [];
	const categoryQuery =
		filterCategory && filterCategory.length > 0
			? {
					CategoryJob: {
						id: {
							in: filterCategory,
						},
					},
			  }
			: {};

	const jobs = await prisma.job.findMany({
		where: { ...categoryQuery },
		include: {
			CategoryJob: true,
			Company: {
				include: {
					Companyoverview: true,
				},
			},
		},
	});

	return NextResponse.json(jobs);
}
