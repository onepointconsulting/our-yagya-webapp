import Link from "next/link";
import { useTranslation } from "react-i18next";
const topMenuData = [
  {
    link: "/",
    label: " Todays murli",
  },
  {
    link: "/events",
    label: "events",
  },
  {
    link: "/",
    label: " classes & talks",
  },
  {
    link: "/",
    label: "news",
  },
  {
    link: "/",
    label: "resources",
  },
  {
    link: "/",
    label: "links directory",
  },
  {
    link: "/",
    label: "more",
  },
];
const StickyMenu = () => {
  const { t } = useTranslation();

  return (
    // <!-- gmenu with gray backgorund -->
    <div className="relative pt-0">
      <div className="filosofia_regular absolute inset-0 bg-grayDark flex-wrap md:flex flex-row items-center md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full">
        {/* stick menu */}
        <Link href="/">
          <a className="px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap text-white">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </Link>
        {topMenuData.map((data, i) => {
          return (
            <>
              <Link href={data.link} key={i}>
                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-4xl whitespace-nowrap">
                  {t(data.label)}
                </a>
              </Link>
              {i < topMenuData.length - 1 && (
                <a className="text-white">|</a>
              )}
            </>
          );
        })}
      </div>

      {/* top menu */}
      <div className="bg-green-400 relative filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-end md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full">
        {topMenuData.map((data, i) => {
          return (
            <>
              <Link href={data.link} key={i}>
                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-4xl whitespace-nowrap">
                  {t(data.label)}
                </a>
              </Link>
              {i < topMenuData.length - 1 && (
                <a className="text-white">|</a>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StickyMenu;
