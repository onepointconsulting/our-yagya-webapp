import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const linksData = [
  {
    link: "/events",
    label: "blessings",
  },
  {
    link: "/",
    label: "photos & images",
  },
  {
    link: "/",
    label: "audio ebooks",
  },
  {
    link: "/",
    label: "books",
  },
  {
    link: "/",
    label: "music",
  },
  {
    link: "/",
    label: "login for more >>",
  },
];

const Recources = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-redD50 text-center p-2">
        <h1 className="filosofia_regular text-2xl md:text-4xl text-white">
          {t("resources")}
        </h1>
      </div>

      <div className="filosofia_regular bg-redD50 p-2  hidden md:block">
        <div className="flex-wrap md:flex flex-row items-end md:justify-around lg:justify-evenly text-center mx-auto w-full">
          {linksData.map((d, i) => {
            return (
              <div key={i}>
                <Link href={d.link}>
                  <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap">
                    {t(d.label)}
                  </a>
                </Link>
                {i < linksData.length - 1 && (
                  <a className="text-home_page_center_nav_text">|</a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recources;
