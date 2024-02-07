"use client";

import i18n from "@/lib/i18n";
import React, { FC, ReactNode } from "react";

import { I18nextProvider as I8NextProvider } from "react-i18next";

interface I18NextProviderProps {
  children: ReactNode;
}

const I18NextProvider: FC<I18NextProviderProps> = ({ children }) => {
  return (
    <I8NextProvider i18n={i18n} defaultNS={"translation"}>
      {children}
    </I8NextProvider>
  );
};

export default I18NextProvider;
