import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader, useFetch } from '@gdi/ui';
import { useMemo } from 'react';
import { Tube } from './Tube';

const SOURCE_BASE = 'https://raw.githubusercontent.com/dht/gdi-assets/main';
// const SOURCE_BASE = '';

export type TubeContainerProps = {
  flavour: 'tube' | 'babylon';
};

export function TubeContainer(props: TubeContainerProps) {
  const { flavour } = props;
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { boardId, itemId } = currentIds;

  const fileName = flavour === 'babylon' ? 'allPlaygrounds.json' : 'allVideos.json';

  const [data, { isLoading }] = useFetch(`${SOURCE_BASE}/boards/${fileName}`);

  const callbacks = useMemo(
    () => ({
      onClick: (id: string) => {
        if (flavour === 'babylon') {
          window.open(`http://playground.babylonjs.com/#${id}`);
          return;
        }

        dispatch({
          type: 'NAVIGATE',
          to: `/boards/${boardId}/${id}`,
        });

        dispatch(actions.currentIds.patch({ itemId: id }));
        dispatch(actions.appState.patch({ flavour: 'item', flavourColumnIndex: 1 }));
      },
      onLogoClick: () => {
        dispatch({
          type: 'NAVIGATE',
          to: '/',
        });
      },
    }),
    [boardId]
  );

  if (isLoading) {
    return <Loader />;
  }

  return <Tube cards={data ?? []} clipId={itemId} flavour={flavour} callbacks={callbacks} />;
}

export default TubeContainer;
