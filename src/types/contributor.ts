import { GetContributorsQuery } from '@/__generated__/graphql';

export type Contributor =
  GetContributorsQuery['contributorCard_All']['items'][number];
