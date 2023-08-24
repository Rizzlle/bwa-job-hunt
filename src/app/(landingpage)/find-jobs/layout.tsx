"use client";

import JobProvider from "@/providers/JobProvider";
import React, { FC, ReactNode } from "react";

interface FindJobsLayoutProps {
	children: ReactNode;
}

const FindJobsLayout: FC<FindJobsLayoutProps> = ({ children }) => {
	return <JobProvider>{children}</JobProvider>;
};

export default FindJobsLayout;
