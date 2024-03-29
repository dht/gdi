import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import { useSaga } from '../../../helpers/useSaga';
import ProductTour from './ProductTour';

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
      onBoardLoaded: (scene: any, debugBabylon: boolean) => {
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
