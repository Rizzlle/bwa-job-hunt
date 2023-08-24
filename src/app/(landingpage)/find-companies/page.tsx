"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import {
	CompanyContext,
	CompanyContextType,
} from "@/providers/CompanyProvider";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesPageProps {}

const FindCompaniesPage: FC<FindCompaniesPageProps> = ({}) => {
	const { companies, filters, changeFilter, isLoading, resetFilter } =
		useContext(CompanyContext) as CompanyContextType;

	const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
		resolver: zodResolver(formFilterCompanySchema),
		defaultValues: {
			industry: [],
		},
	});

	const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) =>
		changeFilter(val.industry);

	const onResetFormFilter = () => {
		formFilter.reset();
		resetFilter();
	};

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmit}
			onResetFilter={onResetFormFilter}
			filterForms={filters}
			title="dream companies"
			subtitle="Find the dream companies you dream work for"
			loading={isLoading}
			type="company"
			data={companies}
		/>
	);
};

export default FindCompaniesPage;
