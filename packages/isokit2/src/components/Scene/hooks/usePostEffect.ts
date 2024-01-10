import { IEnvironment, IPostEffect } from '@gdi/store-iso';
import { useEffect } from 'react';
import { initEnvironment } from '../../../iso.environment';

export function usePostEffect(effect?: IPostEffect) {
  useEffect(() => {}, [effect]);
}
