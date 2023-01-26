export const getServerURL = () => {
  return process.env.GRAPHQL_API || "https://our-yagya-strapi.herokuapp.com";
};
