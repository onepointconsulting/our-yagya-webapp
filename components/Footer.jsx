import { useTranslation } from "react-i18next";
import Link from "next/link";

const footerData = [
  {
    link: "/",
    label: "Our Yagya",
  },
  {
    link: "/",
    label: "Signup For Seva",
  },
  {
    link: "/",
    label: "FAQ",
  },
  {
    link: "/",
    label: "contact us",
  },
  {
    link: "/",
    label: "terms of use",
  },
  {
    link: "/",
    label: "site map",
  },
  {
    link: "/",
    label: "Privacy Policy",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    // <!-- Footer -->
    <footer className="filosofia_italic  flex flex-wrap xl:flex-row items-center  justify-center md:justify-between p-2 md:p-4 px-2 bg-grayfull text-white text-center">
      <div className="hidden md:block md:pl-4 lg:pl-8">
        <Link href="/">
          <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
            {" "}
            {t("Our Yagya")} <span>@</span>2022
          </a>
        </Link>
      </div>

      <div className="md:pr-4 lg:pr-8">
        {footerData.map((data, i) => {
          return (
            <>
              <Link href={data.link} key={i}>
                <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
                  {t(data.label)}
                </a>
              </Link>

              {i < footerData.length - 1 && (
                <a className="px-2"> |</a>
              )}
            </>
          );
        })}
      </div>
      
      <div className="md:hidden md:md:pl-4 lg:pl-8">
        <Link href="/">
          <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
            {" "}
            {t("Our Yagya")} <span>@</span>2022
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
