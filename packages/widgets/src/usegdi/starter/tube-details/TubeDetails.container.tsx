import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader, useFetch } from '@gdi/ui';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { TubeDetails } from './TubeDetails';

const SOURCE_BASE = 'https://raw.githubusercontent.com/dht/gdi-assets/main';
// const SOURCE_BASE = '';

export type TubeDetailsContainerProps = {
  flavour: 'tube' | 'babylon';
};

const r = Math.random();

export function TubeDetailsContainer(props: TubeDetailsContainerProps) {
  const { flavour } = props;
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { boardId, itemId } = currentIds;

  const fileName = flavour === 'babylon' ? 'allPlaygrounds.json' : 'allVideos.json';

  useSagas(['widgets.tube']);

  const [data, { isLoading }] = useFetch(`${SOURCE_BASE}/boards/${fileName}`);

  const callbacks = useMemo(
    () => ({
      onLogoClick: () => {
        dispatch({
          type: 'NAVIGATE',
          to: `/boards/${boardId}`,
        });

        dispatch(actions.currentIds.patch({ itemId: '' }));
        dispatch(actions.appState.patch({ flavour: 'default', flavourColumnIndex: 0 }));
      },
    }),
    [boardId]
  );

  if (isLoading || !itemId) {
    return <Loader />;
  }

  return <TubeDetails cards={data ?? []} clipId={itemId} flavour={flavour} callbacks={callbacks} />;
}

export default TubeDetailsContainer;
