import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router';

import { Badge, Text } from '@/components/ui';
import { HomePageLoaderData } from '@/pages/home/home.loader';

import { ContributorList } from './ContributorList/ContributorList';

import css from './Home.module.scss';

export function Home(): ReactElement {
  const { t } = useTranslation(['common', 'home']);
  const { contributors } = useLoaderData<HomePageLoaderData>();

  return (
    <div className={css.container}>
      <div className={css.hero}>
        <Badge>
          <Text variant="captionBold" color="primary-700">
            {t('home:badge').toUpperCase()}
          </Text>
        </Badge>
        <Text variant="headingBold" color="accent-100">
          {t('home:title')}
        </Text>
        <Text variant="bodyMedium" color="neutral-400">
          {t('home:description')}
        </Text>
      </div>
      {contributors.length && <ContributorList contributors={contributors} />}
    </div>
  );
}
