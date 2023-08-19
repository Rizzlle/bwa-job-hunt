import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import CategoryItem from "./Categoryitem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
	return (
		<div className="mt-32 mb-8">
			<TitleSection word1="Explore by" word2="category" />
			<div className="grid grid-cols-5 gap-9 mt-12">
				{[0, 1, 2, 3, 4].map((item: number) => (
					<CategoryItem key={item} name="Category" totalJobs={100} />
				))}
			</div>
		</div>
	);
};

export default Category;
