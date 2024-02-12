import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader, useFetch } from '@gdi/ui';
import { useEffect, useMemo } from 'react';
import { Tube } from './Tube';
import { useSagas } from '../../../helpers/useSaga';
import { invokeEvent } from 'shared-base';

const SOURCE_BASE = 'https://raw.githubusercontent.com/dht/gdi-assets/main';
// const SOURCE_BASE = '';

export type TubeContainerProps = {
  flavour: 'tube' | 'babylon';
};

const r = Math.random();

export function TubeContainer(props: TubeContainerProps) {
  const { flavour } = props;
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { boardId, itemId } = currentIds;

  const fileName = flavour === 'babylon' ? 'allPlaygrounds.json' : 'allVideos.json';

  useSagas(['widgets.tube']);

  const [data, { isLoading }] = useFetch(`${SOURCE_BASE}/boards/${fileName}?` + r);

  useEffect(() => {
    const clip = (data ?? []).find((clip: any) => clip.id === itemId);
    if (!clip) return;

    invokeEvent('tube/load', { clip });
  }, [data, itemId]);

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
      },
      onLogoClick: () => {
        dispatch({
          type: 'NAVIGATE',
          to: `/boards/${boardId}`,
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
