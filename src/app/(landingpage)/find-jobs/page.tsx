"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { JobContext, JobContextType } from "@/providers/JobProvider";
import { useContext } from "react";

export default function FindJobsPage() {
	const { jobs, filters, changeFilter, isLoading, resetFilter } = useContext(
		JobContext
	) as JobContextType;

	const formFilter = useForm<z.infer<typeof formFilterSchema>>({
		resolver: zodResolver(formFilterSchema),
		defaultValues: {
			categories: [],
		},
	});

	const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) =>
		changeFilter(val.categories);

	const onResetFormFilter = () => {
		formFilter.reset();
		resetFilter();
	};

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmitFormFilter}
			onResetFilter={onResetFormFilter}
			filterForms={filters}
			title="dream job"
			subtitle="Find your next career at companies like HubSpot, Nike,
			and Dropbox"
			loading={isLoading}
			type="job"
			data={jobs}
		/>
	);
}
