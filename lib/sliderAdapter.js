import { fetchSlider } from "./apiClient";

export const sliderAdapter = async (data, locale, url) => {
  const sl = await fetchSlider();
  const deepDownSlides = sl.data?.slides?.data;

  if (deepDownSlides.length > 0) {
    const slider = deepDownSlides[0]?.attributes?.slider;

    // console.log("slider", slider);
    return slider;
  }
  //   This code is working but not properly, just return the data into the console.

  return "";
};
