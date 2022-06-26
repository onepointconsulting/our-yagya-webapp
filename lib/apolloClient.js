import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { getServerURL } from "./apiConstants";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${getServerURL()}/graphql`,
});
const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;
