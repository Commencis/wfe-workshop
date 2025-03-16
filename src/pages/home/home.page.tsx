import { type ReactElement } from 'react';

import { MainLayout } from '@/layouts';
import { Home } from '@/modules/home';

export function HomePage(): ReactElement {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
