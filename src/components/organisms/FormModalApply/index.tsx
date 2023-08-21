"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import UploadField from "../UploadField";

interface FormModalApplyProps {}

const FormModalApply: FC<FormModalApplyProps> = ({}) => {
	const form = useForm<z.infer<typeof formApplySchema>>({
		resolver: zodResolver(formApplySchema),
	});

	const onSubmit = (val: z.infer<typeof formApplySchema>) => {
		console.log("asasa");

		console.log(val);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="lg" className="text-lg px-12 py-6">
					Apply
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<div>
					<div className="inline-flex items-center gap-4">
						<div>
							<Image
								src="/images/company2.png"
								alt="/images/company2.png"
								width={60}
								height={60}
							/>
						</div>
						<div>
							<div className="text-lg font-semibold">
								Social Media Assistant
							</div>
							<div className="text-gray-500">
								Agency . Paris, France . Full-Time
							</div>
						</div>
					</div>

					<Separator className="my-5" />

					<div className="mb-5">
						<div className="font-semibold text-lg">
							Submit your application
						</div>
						<div className="text-gray-500 text-sm mt-2">
							The following is required and will only be shared
							with Nomad
						</div>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<div className="grid grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="fullname"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Full name</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your fullname"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone number</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter your phone number"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="previousJobTitle"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Current of previous job title
											</FormLabel>
											<FormControl>
												<Input
													placeholder="What's your current of previous job title"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<Separator />

							<h2 className="font-semibold">LINKS</h2>

							<div className="grid grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="linkedIn"
									render={({ field }) => (
										<FormItem>
											<FormLabel>LinkedIn URL</FormLabel>
											<FormControl>
												<Input
													placeholder="Link to your linked URL"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="portfolio"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Portfolio URL</FormLabel>
											<FormControl>
												<Input
													placeholder="Link to your portfolio URL"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="coverLetter"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Additional Information
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Add a cover letter or anything else you want to share"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<UploadField form={form} />

							<Button type="submit" className="w-full">
								Apply
							</Button>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default FormModalApply;
