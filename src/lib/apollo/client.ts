import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `https://graphql.kontent.ai/${import.meta.env.VITE_KONTENT_PROJECT_ID}`,
  cache: new InMemoryCache(),
});
