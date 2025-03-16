import { type PropsWithChildren, type ReactElement } from 'react';

import css from './Card.module.scss';

export function Card({ children }: PropsWithChildren): ReactElement {
  return <div className={css.card}>{children}</div>;
}
