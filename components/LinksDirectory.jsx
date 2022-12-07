import Link from 'next/link'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Parallax } from 'react-scroll-parallax'
import { GlobalContext } from '../pages/_app'

const linksDirectoryAdeptor = (linksData) => {
  return linksData.map((link_data) => {
    const links = link_data["attributes"]["Name"];
    return {
      name: links.name,
      description: links.description,
      link: links.link,
    };
  });
};

const LinksDirectory = () => {
  const { t } = useTranslation();
  const { linksData } = useContext(GlobalContext);
  const links = linksDirectoryAdeptor(linksData);

  return (
    <Parallax speed={-5} className="lg:flex mt-3 mb-3 lg:px-6 py-8">
      <div className="w-auto md:w-11/12 lg:w-2/5 md:mb-4text-gray-900 text-xl bg-links_directory relative mr-4 ml-4 md:mr-auto md:ml-auto">
        <div className="bg-button-color capitalize p-2 md:p-4 text-Filosofia italic">
          <h1 className="filosofia_italic text-white ml-auto text-2xl md:text-4xl lg:ml-5">
            {t(" Links directory")}
          </h1>
        </div>

        <div className="links pb-12 mb-4 md:mb-auto md:pb-auto overflow-y-auto lg:overflow-y-none h-72 md:h-auto lg:h-4/6 metropolis_medium ml-3 mr-3 lg:mr-0 lg:ml-5 md:pt-2 lg:pt-4">
          {!!links &&
            links.map((linkData, index) => {
              return (
                <div key={index}>
                  <Link href="/">
                    <a className="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl mt-2 capitalize">
                      {t(linkData.name)}
                    </a>
                  </Link>
                </div>
              );
            })}

          <div className="absolute bottom-4 right-0 left-0">
            <h1 className="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
              <Link href="/links">
                <a>
                  <img src="/img/icons/ArrowDown.png" alt="" />
                </a>
              </Link>
            </h1>
          </div>
        </div>
      </div>

      {/* <!-- video preview --> */}
      <div className="bg-video-pre-color mb-8 md:mb-auto md:w-11/12 lg:ml-2 mr-4 ml-4 md:mr-auto md:ml-auto">
        {/* <!--  featured title --> */}
        <div className="bg-button-color capitalize p-2 md:p-4 text-Filosofia italic">
          <h1 className="filosofia_italic text-white ml-auto text-2xl md:text-4xl">
            {t(" featured videos")}
          </h1>
        </div>

        {/* <!-- Videw section --> */}
        <div className="metropolis_medium bg-video-pre-color ml-3 mr-3 lg:mr-0 lg:ml-0 mt-2">
          <div className="w-auto max-w-auto p-auto md:p-4 xl:p-16 mx-auto">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0 rounded-sm shadow-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-center pb-6 pt-2 text-xs sm:text-sm md:text-xl">
              <div>
                <div className="text-gray-500 font-semibold">
                  <strong>
                    {t(" Siddhi Swaroop: Conclusion & Experiences")}
                  </strong>
                </div>
                <div className="text-gray-500">
                  <span>{t(" Speaker: Mohini Didi")}</span>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <div> {t(" October 31, 201")}</div>
                <div> {t(" Duration: 1:03:45")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default LinksDirectory;
