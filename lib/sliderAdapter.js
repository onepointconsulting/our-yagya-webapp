import { fetchSlider } from "./apiClient";

export const sliderAdapter = async () => {
  const sl = await fetchSlider();
  const deepDownSlides = sl.data?.slides?.data;

  if (deepDownSlides.length > 0) {
    const slider = deepDownSlides[0]?.attributes?.slider;
    // if (slider.length > 0) {
    //   const getFirstSlides = slider[0]
    // }
      
    return console.log("the slider", slider);
  }
  //   This code is working but not properly, just return the data into the console.

  return "";
};
