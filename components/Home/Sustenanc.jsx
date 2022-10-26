import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../../pages/_app";

export default function Sustenanc() {
  const { t } = useTranslation();
  const { sustenanceMenu } = useContext(GlobalContext);

  return (
    <>
      <div className="hidden p-[.75rem] text-center bg-red70 lg:block">
        <h1 className="text-2xl text-slate-50 filosofia_italic md:text-[2.5rem]">
          {t("Sustenance")}
        </h1>
      </div>

      <div className="hidden p-4 filosofia_italic bg-red50 lg:block">
        <div className="flex items-center justify-around w-full mx-auto text-center md:flex">
          {!!sustenanceMenu &&
            sustenanceMenu.map((sustenance, i) => {
              return (
                <>
                  <Link key={i} href={sustenance.attributes.url}>
                    <a className="flex items-center justify-center h-12 px-4 py-2 text-lg text-center md:w-32 lg:w-48 lg:text-3xl xl:text-[2rem] rounded-3xl bg-gold1 text-slate-50 whitespace-nowrap">
                      {sustenance.attributes.title}
                    </a>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
