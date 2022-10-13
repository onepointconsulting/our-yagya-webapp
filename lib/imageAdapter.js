
export const imageAdapter = (data) => {
  const pageLayout = data?.data?.pageLayouts?.data;
  if (pageLayout.length > 0) {
    const backgroundImages = pageLayout[0].attributes?.backgroundImage?.data;
    if (backgroundImages.length > 0) {
      return backgroundImages[0]?.attributes?.url;
    }
  }
  return "";
};
