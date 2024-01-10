import React, { useMemo } from 'react';
import { Wrapper } from './ProductTour.style';
import { ModelViewer, Scene } from 'isokit2';
import { useMeasure } from 'react-use';
import ProductTour from './ProductTour';
import { useDispatch } from '@gdi/store-base';
import { useSaga } from '../../../helpers/useSaga';

export type ProductTourContainerProps = {
  sceneUrl: string;
  scene: any;
  hudUrl: string;
  hud: any;
};

export function ProductTourContainer(props: ProductTourContainerProps) {
  const { scene: board, hud } = props;

  const dispatch = useDispatch();

  useSaga('widgets.productTour');

  const callbacks = useMemo(
    () => ({
      onBoardLoaded: (scene: Scene, debugBabylon: boolean) => {
        dispatch({
          type: 'PRODUCT_TOUR_LOADED',
          scene,
          debugBabylon,
        });
      },
      onNudgeBoard: (delta: number) => {},
    }),
    []
  );

  return <ProductTour board={board} hud={hud} onBoardLoaded={callbacks.onBoardLoaded} />;
}

export default ProductTourContainer;
