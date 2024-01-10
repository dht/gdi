import classnames from 'classnames';
import { useContext, useRef } from 'react';
import { GridProviderProps } from '../../grid.types';
import { GridView } from '../GridView/GridView';
import { GridContext, GridProvider } from './Grid.context';
import { Wrapper } from './Grid.style';

export type GridInnerProps = {};

export function GridInner(_props: GridInnerProps) {
  const { config } = useContext(GridContext);

  const ref = useRef<HTMLDivElement>(null);

  const className = classnames('Grid-wrapper', {
    dark: config.darkMode,
  });

  return (
    <Wrapper className={className} ref={ref}>
      <GridView gridRef={ref} />
    </Wrapper>
  );
}

export function Grid(props: GridProviderProps) {
  return (
    <GridProvider {...props}>
      <GridInner />
    </GridProvider>
  );
}

export default Grid;
