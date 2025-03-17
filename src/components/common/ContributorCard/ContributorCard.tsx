import { type ReactElement } from 'react';

import { Contributor } from '@/types';

import { Card, Icon, Text } from '@/components/ui';

import css from './ContributorCard.module.scss';

type ContributorCardProps = {
  contributor: Contributor;
};

export function ContributorCard({
  contributor: {
    fullName,
    profilePicture,
    roleInProject,
    email,
    linkedinLink,
    githubLink,
  },
}: ContributorCardProps): ReactElement {
  return (
    <Card>
      <div className={css.content}>
        <img src={profilePicture?.url} alt={fullName} />
        <div className={css.name}>
          <Text variant="subHeadingBold" color="neutral-200">
            {fullName}
          </Text>
          <Text variant="bodyBold" color="neutral-400">
            {roleInProject}
          </Text>
        </div>
        <Text variant="footnoteBold" color="neutral-400">
          {email}
        </Text>
        <div className={css.socials}>
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Icon name="github" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
