import { PropsWithChildren, ReactElement } from 'react';

import css from './MainLayout.module.scss';

import CommencisLogo from '@/assets/images/commencis-logo.svg';

export function MainLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <main id="main-layout" className={css.container}>
      <CommencisLogo id="logo" />
      {children}
    </main>
  );
}
