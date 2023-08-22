"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindCompaniesPageProps {}

const FILTER_FORMS: filterFormType[] = [
	{
		name: "industry",
		label: "Industry",
		items: CATEGORIES_OPTIONS,
	},
];

const dataDummy: CompanyType[] = [
	{
		image: "/images/company2.png",
		categories: "Marketing",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, deserunt itaque vero",
		name: "Twitter",
		totalJobs: 10,
	},
	{
		image: "/images/company2.png",
		categories: "Marketing",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, deserunt itaque vero",
		name: "Twitter",
		totalJobs: 10,
	},
	{
		image: "/images/company2.png",
		categories: "Marketing",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, deserunt itaque vero",
		name: "Twitter",
		totalJobs: 10,
	},
];

const FindCompaniesPage: FC<FindCompaniesPageProps> = ({}) => {
	const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
		resolver: zodResolver(formFilterCompanySchema),
		defaultValues: {
			industry: [],
		},
	});

	const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
		console.log(val);
	};

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmit}
			filterForms={FILTER_FORMS}
			title="dream companies"
			subtitle="Find the dream companies you dream work for"
			loading={false}
			type="company"
			data={dataDummy}
		/>
	);
};

export default FindCompaniesPage;
