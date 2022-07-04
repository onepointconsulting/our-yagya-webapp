import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export function sliderAdapter(data) {
  if (!!data?.data && data?.data?.pageLayouts.data.length > 0) {
    return data?.data?.pageLayouts.data[0]?.attributes.slider.slides;
  }
  return [];
}

export function imageAdapter(imageData) {
  if (!!imageData?.data && imageData?.data.length > 0) {
    return imageData?.data[0]?.attributes.url;
  }
  return null;
}

const Slider = ({ data }) => {
  const { t } = useTranslation();

  sliderAdapter(data);

  // slider fields need correction:
  // 1. startDate need to be date.
  // 2. we need 2 more fields. like: author
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
      {sliderAdapter(data).map((s, i) => {
        console.log("image", JSON.stringify(s.image));
        return (
          <SplideSlide key={i}>
            <ul>
              <li className="splide__slide" style={{ padding: "0px" }}>
                <div className="metropolis_medium mx-auto bg-home_page_top_bg w-full shadow-md overflow-hidden max-w-full">
                  <div className="md:flex justify-between items-center">
                    <div className="mx-auto mt-2 lg:mt-0">
                      <img
                        className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-64 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover"
                        style={{ marginRight: "auto", marginLeft: "auto" }}
                        src={imageAdapter(s.image)}
                        alt="Man looking at item at a store"
                      />
                    </div>
                    <div className="md:pl-14 w-full">
                      <div className="pl-4 pr-1 sm:pr-0 sm:pl-0 home_page_top text-lg md:text-2xl xl:text-4xl my-1 sm:my-4 text-gray-500 capitalize">
                        {s.title}
                        <br />
                        <h1 className="home_page_top text-lg md:text-2xl xl:text-4xl text-gray-500 capitalize lg:pt-4">
                          {s.startTimestamp}
                        </h1>
                      </div>
                      <br />
                      <div className="lg:flex justify-between items-center">
                        <div className="pl-4 pr-1 sm:pr-0 sm:pl-0">
                          <h3 className="online-event-p text-sm md:text-xl lg:text-lg xl:text-2xl text-gray-500 capitalize">
                            {s.speakers}
                          </h3>
                        </div>

                        <div className="float-right text-sm md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                          <Link href="/google.com">
                            <a href="#">{s.link}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Slider;
