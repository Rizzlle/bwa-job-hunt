import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import bcrypt from "bcryptjs";
import { companyJobType } from "@/types";

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
		}) as companyJobType[];
	}

	return [];
};
