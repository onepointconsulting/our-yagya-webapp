export const newsAdapter = (data) => {
  const news = data?.data?.news?.data;
  if (news.length > 0) {
    return news;
  }
  return [];
};
