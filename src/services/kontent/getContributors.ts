import { apolloClient } from '@/lib/apollo/client';
import { Contributor } from '@/types';

import {
  GetContributorsDocument,
  GetContributorsQuery,
} from '@/__generated__/graphql';

export async function getContributors(): Promise<Contributor[]> {
  try {
    const { data } = await apolloClient.query<GetContributorsQuery>({
      query: GetContributorsDocument,
    });

    return data.contributorCard_All.items ?? [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching contributors:', error);
    return [];
  }
}
