import { Form } from "@/components/ui/form";
import { FC, useContext } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";
import { JobContext, JobContextType } from "@/providers/JobProvider";

interface FormFilterDynamicProps {
	formFilter: any;
	onSubmitFilter: (val: any) => Promise<void>;
	onResetFilter: () => void;
	filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
	filterForms,
	formFilter,
	onSubmitFilter,
	onResetFilter,
}) => {
	return (
		<Form {...formFilter}>
			<form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
				{filterForms.map((item: filterFormType, i: number) => (
					<CheckboxForms
						key={i}
						formFilter={formFilter}
						items={item.items}
						label={item.label}
						name={item.name}
					/>
				))}

				<Button className="mt-5 w-full">Apply Filter</Button>
				<Button
					type="button"
					onClick={onResetFilter}
					variant="outline"
					className="mt-3 w-full"
				>
					Reset Filter
				</Button>
			</form>
		</Form>
	);
};

export default FormFilterDynamic;
