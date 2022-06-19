import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";

const eventsData = [
  {
    link: "/",
    label: "Online GlobalSilence Retreat",
  },
  {
    link: "/",
    label: "Silence Retreat",
    date: "19-20 November",
  },
  {
    link: "/",
    label: "Avyakt BapDada",
  },
  {
    link: "/",
    label: "milan",
  },
  {
    link: "/",
    date: "15 November    ",
  },
  {
    link: "/",
    label: "Dewali Festival    ",
  },
  {
    link: "/",
    date: "4 November",
  },
];
const HomeHero = () => {
  const { t } = useTranslation();
  return (
    <Parallax speed={6} className="w-full flex flex-col items-center">
      <div className="imageBack w-full mb-auto lg:flex justify-center bg-opacity-75 h-auto">
        <div className="lg:flex justify-center items-end pt-4 lg:pt-72 pb-4 mr-4 ml-4 md:mr-auto md:ml-auto">
          <div className="fadeInLeft bg-gray-200 bg-opacity-95 lg:m-4 md:mr-auto md:ml-auto  w-auto md:w-4/5 lg:w-72 xl:w-96 h-full pb-12 xl:pb-16 relative mb-2 lg:mb-0">
            {/* Events */}
            <div className="filosofia_italic bg-button-color text-white p-2 text-2xl md:text-4xl">
              {t("Events")}
            </div>

            <div className="metropolis_medium p-4 overflow-y-auto h-80 ">
              {eventsData.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="text-title-conf-color text-lg md:text-2xl mt-2">
                      {t(data.label)}
                    </div>

                    <div>
                      <span className="text-sm text-date-color md:text-base">
                        {t(data.date)}{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-8 right-0 left-0">
              <h1 className="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                <Link href="/news">
                  <a>
                    <img
                      src="./img/icons/ArrowDown.png"
                      alt=""
                    />
                  </a>
                </Link>
              </h1>
            </div>
          </div>

          {/*  Latest classes */}
          <div className="fadeInTop bg-gray-200 bg-opacity-95 lg:m-4 md:mr-auto md:ml-auto  w-auto md:w-4/5 lg:w-72 xl:w-96 h-full pb-12 xl:pb-16 relative mb-2 lg:mb-0">
            <div className="filosofia_italic bg-button-color text-white p-2 text-2xl md:text-4xl">
              {t(" Latest classes")}
            </div>
            <div className="metropolis_medium p-4 overflow-y-auto h-80 ">
              {eventsData.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="text-title-conf-color text-lg md:text-2xl mt-2">
                      {t(data.label)}
                    </div>

                    <div>
                      <span className="text-sm text-date-color md:text-base">
                        {t(data.date)}{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-8 right-0 left-0">
              <h1 className="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                <Link href="/">
                  <a href="/classes.html">
                    <img
                      src="./img/icons/ArrowDown.png"
                      alt=""
                    />
                  </a>
                </Link>
              </h1>
            </div>
          </div>

          {/* news */}
          <div className="fadeInRight metropolis_medium fadeInRight bg-gray-200 bg-opacity-95 lg:m-4 md:mr-auto md:ml-auto  w-auto md:w-4/5 lg:w-72 xl:w-96 h-full pb-12 xl:pb-16 relative mb-2 lg:mb-0">
            <div className="filosofia_italic bg-button-color text-white p-2 text-2xl md:text-4xl">
              {t("News")}
            </div>
            <div className="metropolis_medium p-4 overflow-y-auto h-80 ">
              {eventsData.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="text-title-conf-color text-lg md:text-2xl mt-2">
                      {t(data.label)}
                    </div>

                    <div>
                      <span className="text-sm text-date-color md:text-base">
                        {t(data.date)}{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-8 right-0 left-0">
              <h1 className="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                <Link href="/news">
                  <a>
                    <img
                      src="./img/icons/ArrowDown.png"
                      alt=""
                    />
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default HomeHero;
