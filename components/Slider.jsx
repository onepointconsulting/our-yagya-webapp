import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// const sliderAdapter = (data) => {
//   // TODO: extract slider data from GraphQL response
//   const slideData = sliderData["data"]["pageLayouts"]["attributes"]["slider"];
//   return console.log("slideData", slideData);
// };

const Slider = ({ data }) => {
  const { t } = useTranslation();

  const sliderDataObject = [
    {
      data: {
        pageLayouts: {
          data: [
            {
              attributes: {
                title: "Home",
                subtitle: "Our project",
                slider: {
                  title:
                    "She was undergoing treatment at Saifee Hospital in Mumbai for the past 15 day",
                  slides: [
                    {
                      id: "1",
                      image: {
                        data: [
                          {
                            id: "4",
                            __typename: "UploadFileEntity",
                          },
                        ],
                        __typename: "UploadFileRelationResponseCollection",
                      },
                      title: "Prime Minister Narendra Modi",
                      subtitle: "Prime Minis a Modi",
                      __typename: "ComponentSlidesComSlides",
                    },
                    {
                      id: "3",
                      image: {
                        data: [
                          {
                            id: "5",
                            __typename: "UploadFileEntity",
                          },
                        ],
                        __typename: "UploadFileRelationResponseCollection",
                      },
                      title: "Another slider",
                      subtitle: "sub title for another slider",
                      __typename: "ComponentSlidesComSlides",
                    },
                    {
                      id: "2",
                      image: {
                        data: [
                          {
                            id: "4",
                            __typename: "UploadFileEntity",
                          },
                        ],
                        __typename: "UploadFileRelationResponseCollection",
                      },
                      title: "some more slider",
                      subtitle: "sub title fore some more slider",
                      __typename: "ComponentSlidesComSlides",
                    },
                  ],
                  __typename: "ComponentSliderComSlider",
                },
                __typename: "PageLayout",
              },
              __typename: "PageLayoutEntity",
            },
          ],
          __typename: "PageLayoutEntityResponseCollection",
        },
      },
      loading: false,
      networkStatus: 7,
      stale: false,
    },
  ];

  const slider = sliderDataObject[0].data.pageLayouts.data[0].attributes.slider;
  console.log("slider", slider);

  // The result is an empty object.
  console.log("home Page Data", data);
  return (
    <Splide
      aria-label="My slider"
      options={{
        type: "loop",
        arrows: false,
        speed: 1000,
        swipeDistanceThreshold: 300,
      }}
    >
      <SplideSlide>
        {/* <!-- second slide --> */}
        <ul>
          <li className="splide__slide" style={{ padding: "0px" }}>
            {/* <!-- first slide --> */}
            <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
              <div className="md:flex justify-between items-center">
                <div className="mx-auto mt-2 lg:mt-0">
                  <img
                    className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-64 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                    style={{ marginRight: "auto", marginLeft: "auto" }}
                    src="../img/ParliamentLOGO.png"
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="md:pl-14 w-full">
                  <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-4xl my-1 sm:my-4 text-gray-500 capitalize">
                    {t("Peacebuilding women making a difference *(2)")}
                    <br />
                    <h1 className="home_page_top text-lg md:text-2xl xl:text-4xl text-gray-500 capitalize lg:pt-4">
                      {t("   October 17, 2021 | 10:00am EST")}
                    </h1>
                  </div>

                  <br />
                  <div className="lg:flex justify-between items-end sm:items-center">
                    <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                      <h3 className="online-event-p text-sm md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                        {t("Sr. Jayanti Kirpalani, Des")}
                      </h3>
                      <h3 className="online-event-p text-sm md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                        {t("Shih de huang jude urriave phd")}
                      </h3>
                    </div>

                    <div className="float-right text-sm md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                      <Link href="/google.com">
                        <a href="#">{t("  INFO: www.newurl.com")}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </SplideSlide>

      <SplideSlide>
        {/* <!-- second slide --> */}
        <ul>
          <li className="splide__slide">
            {/* <!-- first slide --> */}
            <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
              <div className="md:flex justify-between items-center">
                <div className="mx-auto mt-2 lg:mt-0">
                  <img
                    className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-64 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                    style={{ marginRight: "auto", marginLeft: "auto" }}
                    src="../img/ParliamentLOGO.png"
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="md:pl-14 w-full">
                  <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-4xl my-1 sm:my-4 text-gray-500 capitalize">
                    {t("Peacebuilding women making a difference *(2)")}
                    <br />
                    <h1 className="home_page_top text-lg md:text-2xl xl:text-4xl text-gray-500 capitalize lg:pt-4">
                      {t("   October 17, 2021 | 10:00am EST")}
                    </h1>
                  </div>

                  <br />
                  <div className="lg:flex justify-between items-end sm:items-center">
                    <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                      <h3 className="online-event-p text-sm md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                        {t("Sr. Jayanti Kirpalani, Des")}
                      </h3>
                      <h3 className="online-event-p text-sm md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                        {t("Shih de huang jude urriave phd")}
                      </h3>
                    </div>

                    <div className="float-right text-sm md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                      <Link href="/google.com">
                        <a href="#">{t("  INFO: www.newurl.com")}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
