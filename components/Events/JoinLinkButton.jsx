import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const JoinLinkButton = ({ event }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center px-1 py-1 my-1 rounded-md cursor-pointer bg-gold1 xl:my-2 xl:px-2 xl:py-2 ${
        event.joinLink
          ? "bg-gold1 text-white"
          : "bg-gray-300 text-slate-200 cursor-text"
      }`}
    >
      <div>
        <img
          className="w-4 xs:w-6 lg:w-12"
          src="/img/icons8-pencil-64.png"
          alt={event.title}
          title={event.title}
        />
      </div>

      {!!event.joinLink ? (
        <Link href={event.joinLink} target="_blank">
          <div
            className={`$pl-1 md:pl-3 lg:pl-4 text-[7px] xss:text-[12px] md:text-lg lg:text-xl xl:text-2xl text-white ${
              event.joinLink ? "text-white" : "text-white cursor-text"
            }`}
          >
            {t("Register")}
          </div>
        </Link>
      ) : (
        <div className="pl-1 md:pl-3 lg:pl-4 text-[7px] xss:text-[12px] md:text-lg lg:text-xl xl:text-2xl text-white">
          {t("Register")}
        </div>
      )}
    </div>
  );
};

export default JoinLinkButton;
