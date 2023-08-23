import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import bcrypt from "bcryptjs";
import { JobType, categoryJobType } from "@/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
	const hashedPassword = await bcrypt.hash(password, 8);

	return hashedPassword;
};

export const comparePassword = async (
	password: string,
	hashedPassword: string
) => {
	const isMatch = await bcrypt.compare(password, hashedPassword);

	return isMatch;
};

export async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init);

	return res.json() as Promise<JSON>;
}

export const parsingCategories = (
	data: any,
	isLoading: boolean,
	error: any
) => {
	if (!isLoading && !error && data) {
		return data.map((item: any) => {
			return {
				id: item.id,
				name: item.name,
				totalJobs: item._count.Job,
			};
		}) as categoryJobType[];
	}

	return [];
};

export const parsingJobs = (data: any, isLoading: boolean, error: any) => {
	if (!isLoading && !error && data) {
		return data.map((item: any) => {
			const job: JobType = {
				id: item.id,
				name: item.roles,
				applicants: item.applicants,
				categories: item.CategoryJob,
				desc: item.description,
				jobType: item.jobType,
				image: "/images/company2.png",
				location: item.Company?.Companyoverview[0]?.location,
				needs: item.needs,
				type: item.CategoryJob.name,
			};

			return job;
		}) as JobType[];
	}

	return [];
};
