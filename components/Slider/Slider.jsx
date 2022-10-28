import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { sliderAdapter, sliderImageAdapter } from "../../lib/sliderAdapter";
import Link from "next/link";
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'


/**
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
const Slider = ({ data }) => {
  const {locale} = useContext(GlobalContext)
  const slides = sliderAdapter(data, locale);

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
      {slides.map((slide) => {
        const image = sliderImageAdapter(slide);

        return (
          <SplideSlide className="splide__slide" key={slide.id}>
            <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
              <div className="md:flex justify-between items-center">
                <div className="mx-auto mt-2 lg:mt-0">
                  <img
                    className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-48 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover p-4"
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      filter: "drop-shadow(0 0 1.75rem white)",
                    }}
                    src={image?.url}
                    alt={image?.alternativeText}
                    title={image?.alternativeText}
                  />
                </div>
                <div className="md:pl-14 w-full">
                    <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-[32px] my-1 sm:my-4 text-gray-500 capitalize">
                        {slide.title}
                        <br />
                        <h1 className="home_page_top text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                            {slide.startTimestampStr}
                        </h1>
                    </div>
                  <div className="mb-4 lg:flex justify-between items-end sm:items-center">
                    <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                      <h3 className="online-event-p text-lg leading-8	 md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                        {slide.speakers}
                      </h3>
                    </div>

                    <div className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                      <Link href={slide.link}>
                        <a> {slide.link}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
export default Slider;
