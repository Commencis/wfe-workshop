import { type ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { Contributor } from '@/types';

import { ContributorCard } from '@/components/common';
import { Text } from '@/components/ui';

import css from './ContributorList.module.scss';

type ContributorListProps = {
  contributors: Contributor[];
};

export function ContributorList({
  contributors,
}: ContributorListProps): ReactElement {
  const { t } = useTranslation(['home']);

  return (
    <div className={css.container}>
      <Text variant="subHeadingBold" color="neutral-300">
        {t('home:contributors')}
      </Text>
      <div className={css.list}>
        {contributors.map((contributor) => (
          <ContributorCard key={contributor.email} contributor={contributor} />
        ))}
      </div>
    </div>
  );
}
