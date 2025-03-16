import { Contributor } from '@/types';

import { getContributors } from '@/services/kontent/getContributors';

export type HomePageLoaderData = {
  contributors: Contributor[];
};

export async function homePageLoader(): Promise<HomePageLoaderData> {
  const contributors = await getContributors();

  return { contributors };
}
