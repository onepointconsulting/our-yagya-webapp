export const sliderAdapter = (data) => {

  const slides = data?.data?.data?.slides?.data
  if(!slides || slides.length === 0) {
    return []
  }
  return slides[0]?.attributes?.slider?.slides
};

export const sliderImageAdapter = (data) => {
  return data?.image?.data?.attributes
}
