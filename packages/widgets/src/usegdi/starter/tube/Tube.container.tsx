import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Loader, useFetch } from '@gdi/ui';
import { useMemo } from 'react';
import { Tube } from './Tube';

export type TubeContainerProps = {};

export function TubeContainer(_props: TubeContainerProps) {
  const dispatch = useDispatch();
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { hash } = document.location;
  const clipId = hash.replace('#', '');

  const [data, { isLoading }] = useFetch(
    'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/allVideos.json'
  );

  const callbacks = useMemo(
    () => ({
      onClick: (id: string) => {
        document.location.hash = id;
      },
      onLogoClick: () => {
        document.location.hash = '';
      },
    }),
    []
  );

  if (isLoading) {
    return <Loader />;
  }

  return <Tube cards={data ?? []} clipId={clipId} callbacks={callbacks} />;
}

export default TubeContainer;
