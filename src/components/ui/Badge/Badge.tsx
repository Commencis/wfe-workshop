import { type PropsWithChildren, type ReactElement } from 'react';

import css from './Badge.module.scss';

export function Badge({ children }: PropsWithChildren): ReactElement {
  return <div className={css.badge}>{children}</div>;
}
