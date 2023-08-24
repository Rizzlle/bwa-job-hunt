"use client";

import useCategoryFilter from "@/hooks/useCategoryFilter";
import useJobs from "@/hooks/useJobs";
import { JobType, filterFormType } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export type JobContextType = {
	filters: filterFormType[];
	jobs: JobType[];
	changeFilter: (filter: string[]) => void;
	resetFilter: () => void;
	isLoading: boolean;
};

export const JobContext = createContext<JobContextType | null>(null);

const JobProvider = ({ children }: { children: ReactNode }) => {
	const [filter, setFilter] = useState<string[]>([]);

	const { filters } = useCategoryFilter();
	const { jobs, mutate, isLoading } = useJobs(filter);

	const changeFilter = (filter: string[]) => {
		setFilter(filter);
	};

	const resetFilter = () => {
		setFilter([]);
	};

	useEffect(() => {
		mutate();
	}, [filter]);

	return (
		<JobContext.Provider
			value={{ jobs, filters, changeFilter, resetFilter, isLoading }}
		>
			{children}
		</JobContext.Provider>
	);
};

export default JobProvider;
