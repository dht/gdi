import { useDispatch } from '@gdi/store-base';
import { useEffect, useState } from 'react';
import { useSaga } from '../../../helpers/useSaga';
import { Babylon } from './Babylon';

export type BabylonContainerProps = {
  sceneUrl: string;
  scene: any;
};

export const BabylonContainer = (props: BabylonContainerProps) => {
  const { scene } = props;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useSaga('widgets.babylon');

  useEffect(() => {
    if (!scene) return;
    dispatch({ type: 'BABYLON_BOOTSTRAP', payload: { scene } });
  }, [scene]);

  if (!scene) {
    return null;
  }

  return <Babylon isLoading={isLoading} />;
};

export default BabylonContainer;
