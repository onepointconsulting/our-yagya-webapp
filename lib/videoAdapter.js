export const videoAdapter = (data) => {
  const video = data?.data?.videos?.data;
  if (!video || video.length === 0) {
    return [];
  }
  return video[0]?.attributes;
};
