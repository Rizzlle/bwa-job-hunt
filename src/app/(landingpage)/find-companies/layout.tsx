"use client";

import CompanyProvider from "@/providers/CompanyProvider";
import React, { FC, ReactNode } from "react";

interface FindCompaniesLayoutProps {
	children: ReactNode;
}

const FindCompaniesLayout: FC<FindCompaniesLayoutProps> = ({ children }) => {
	return <CompanyProvider>{children}</CompanyProvider>;
};

export default FindCompaniesLayout;
