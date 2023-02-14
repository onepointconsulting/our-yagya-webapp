import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const MoreInfoButton = ({event,}) => {
  const { t } = useTranslation();

  return (
    <Link href={`/single_event/${event.id}`}>
      <div className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center">
        <div>
          <img
            className="w-4 xs:w-6 lg:w-12"
            src="/img/icons8-info-50.png"
            alt={event.title}
            title={event.title}
          />
        </div>
        <div className="pl-1 md:pl-3 lg:pl-4 text-[9px] md:text-lg lg:text-xl xl:text-2xl text-white">{t("More Info")}</div>
      </div>
    </Link>
  );
};

export default MoreInfoButton;
