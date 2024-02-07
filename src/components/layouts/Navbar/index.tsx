"use client";

import SwitchTranslation from "@/components/atoms/Switchtranslation";
import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();

  const { t } = useTranslation();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
          />
        </div>
        <div>
          <Link
            href="/find-jobs"
            className="font-medium text-muted-foreground mr-4 cursor-pointer"
          >
            {t("navbar.nav-item-1")}
          </Link>
          <Link
            href="/find-companies"
            className="font-medium text-muted-foreground cursor-pointer"
          >
            {t("navbar.nav-item-2")}
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4">
        <div className="inline-flex items-center gap-4 h-8">
          {session ? (
            <MenuAuth />
          ) : (
            <>
              <Button onClick={() => router.push("/signin")} variant="link">
                {t("navbar.btn-signin")}
              </Button>
              <Button>{t("navbar.btn-signup")}</Button>
            </>
          )}
        </div>
        <SwitchTranslation />
      </div>
    </header>
  );
};

export default Navbar;
