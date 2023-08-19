import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
	return (
		<div className="mt-32 mb-10">
			<TitleSection word1="Featured" word2="jobs" />
			<div className="grid grid-cols-4 gap-8 mt-12">
				{[0, 1, 2].map((item: number) => (
					<JobItem
						key={item}
						image="/images/company.png"
						jobType="Full Time"
						name="Email Marketing"
						type="Agency"
						location="Paris, France"
						desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis perspiciatis harum in id. Magni neque iste excepturi illum necessitatibus eos quae error, unde repudiandae? Numquam eveniet est facilis alias."
						categories={["Marketing", "Design"]}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturedJobs;
