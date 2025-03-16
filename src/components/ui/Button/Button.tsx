import { type ReactElement } from 'react';

import clsx from 'clsx';

import { Text, type TextVariant } from '@/components/ui';

import type { ButtonProps, ButtonSize } from './Button.types';

import styles from './Button.module.scss';

const buttonSizeTextVariantMap = {
  small: 'footnoteMedium',
  medium: 'captionMedium',
  large: 'bodyMedium',
} as const satisfies Record<ButtonSize, TextVariant>;

export const Button = ({
  label,
  size = 'medium',
  variant = 'filled',
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...rest}
    >
      <Text as="span" variant={buttonSizeTextVariantMap[size]}>
        {label}
      </Text>
    </button>
  );
};
