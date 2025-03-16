import { PropsWithChildren } from 'react';

import { Locale, Theme } from '@/types';

export type Preferences = {
  locale: Locale;
  theme: Theme;
};

export type PreferencesContextType = Preferences & {
  updatePreferences: (preferences: Partial<Preferences>) => void;
};

export type PreferencesProviderProps = PropsWithChildren<{
  initialPreferences?: Preferences;
}>;
