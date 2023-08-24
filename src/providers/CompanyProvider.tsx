"use client";

import useCategoryIndustryFilter from "@/hooks/useCategoryIndustryFilter";
import useCompanies from "@/hooks/useCompanies";
import { companyType, filterFormType } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export type CompanyContextType = {
	filters: filterFormType[];
	companies: companyType[];
	changeFilter: (filter: string[]) => void;
	resetFilter: () => void;
	isLoading: boolean;
};

export const CompanyContext = createContext<CompanyContextType | null>(null);

const CompanyProvider = ({ children }: { children: ReactNode }) => {
	const [filter, setFilter] = useState<string[]>([]);

	const { filters } = useCategoryIndustryFilter();
	const { companies, mutate, isLoading } = useCompanies(filter);

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
		<CompanyContext.Provider
			value={{ companies, filters, changeFilter, resetFilter, isLoading }}
		>
			{children}
		</CompanyContext.Provider>
	);
};

export default CompanyProvider;
