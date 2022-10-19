import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
import { sliderAdapter } from "../../lib/sliderAdapter";

const Slider = (data) => { 
  // const {sliderAdapter} = useContext(GlobalContext)
  sliderAdapter(data).then((slide) => console.log("slide", slide));

  return (
    <Splide
      className="splide visible"
      style={{ zIndex: "0" }}
      aria-label="My slider"
      options={{
        type: "loop",
        arrows: false,
        speed: 1000,
        swipeDistanceThreshold: 300,
      }}
    >
      {/* <!-- second slide --> */}
      <SplideSlide className="splide__slide">
        {/* <!-- first slide --> */}
        <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
          <div className="md:flex justify-between items-center">
            <div className="mx-auto mt-2 lg:mt-0">
              <img
                className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-48 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                style={{ marginRight: "auto", marginLeft: "auto" }}
                src="../img/ParliamentLOGO.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="md:pl-14 w-full">
              <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-[32px] my-1 sm:my-4 text-gray-500 capitalize">
                Peacebuilding women making a difference *(2)
                <br />
                <h1 className="home_page_top text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                  October 17, 2021 | 10:00am EST
                </h1>
              </div>
              <div className="mb-4 lg:flex justify-between items-end sm:items-center">
                <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Sr. Jayanti Kirpalani, Des
                  </h3>
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Shih de huang jude urriave phd
                  </h3>
                </div>

                <div className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                  <a href="#"> INFO: www.newurl.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="splide__slide">
        {/* <!-- first slide --> */}
        <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
          <div className="md:flex justify-between items-center">
            <div className="mx-auto mt-2 lg:mt-0">
              <img
                className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-48 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                style={{ marginRight: "auto", marginLeft: "auto" }}
                src="../img/ParliamentLOGO.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="md:pl-14 w-full">
              <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-[32px] my-1 sm:my-4 text-gray-500 capitalize">
                Peacebuilding women making a difference *(2)
                <br />
                <h1 className="home_page_top text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                  October 17, 2021 | 10:00am EST
                </h1>
              </div>
              <div className="mb-4 lg:flex justify-between items-end sm:items-center">
                <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Sr. Jayanti Kirpalani, Des
                  </h3>
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Shih de huang jude urriave phd
                  </h3>
                </div>

                <div className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                  <a href="#"> INFO: www.newurl.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="splide__slide">
        {/* <!-- first slide --> */}
        <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
          <div className="md:flex justify-between items-center">
            <div className="mx-auto mt-2 lg:mt-0">
              <img
                className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-48 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                style={{ marginRight: "auto", marginLeft: "auto" }}
                src="../img/ParliamentLOGO.png"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="md:pl-14 w-full">
              <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-[32px] my-1 sm:my-4 text-gray-500 capitalize">
                Peacebuilding women making a difference *(2)
                <br />
                <h1 className="home_page_top text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                  October 17, 2021 | 10:00am EST
                </h1>
              </div>
              <div className="mb-4 lg:flex justify-between items-end sm:items-center">
                <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Sr. Jayanti Kirpalani, Des
                  </h3>
                  <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                    Shih de huang jude urriave phd
                  </h3>
                </div>

                <div className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                  <a href="#"> INFO: www.newurl.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};
export default Slider;
