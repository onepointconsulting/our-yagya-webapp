export const getServerURL = () => {
  return process.env.GRAPHQL_API || "http://localhost:1337";
};
