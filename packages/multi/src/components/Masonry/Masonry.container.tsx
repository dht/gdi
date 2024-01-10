import { useMemo } from 'react';
import { IImage, Json } from '../../types';
import Masonry from './Masonry';
import { MasonryProvider } from './Masonry.context';
import { IMasonryCallbacks, IMasonryConfig } from './Masonry.types';

export type MasonryContainerProps = {
  data: IImage[];
  config?: IMasonryConfig;
  callbacks: IMasonryCallbacks;
};

export function MasonryContainer(props: MasonryContainerProps) {
  const { config, data } = props;

  const initialState = useMemo(
    () => ({
      config,
    }),
    []
  );

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, _params?: Json) => {},
      onSort: () => {},
    }),
    []
  );

  return (
    <MasonryProvider callbacks={callbacks} state={initialState}>
      <Masonry items={data} />
    </MasonryProvider>
  );
}

export default MasonryContainer;
