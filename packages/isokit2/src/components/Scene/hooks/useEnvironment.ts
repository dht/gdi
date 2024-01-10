import { IEnvironment } from '@gdi/store-iso';
import { useEffect } from 'react';
import { initEnvironment } from '../../../iso.environment';

export function useEnvironment(environment?: Partial<IEnvironment>) {
  useEffect(() => {
    initEnvironment(environment as any);
  }, [environment]);
}
