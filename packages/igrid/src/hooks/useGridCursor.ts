import { RefObject, useEffect, useState, useCallback } from 'react';
import { IDimension, IGridConfig, IGridPosition } from '../grid.types';
import { useGridPosition } from './useGridPosition';
import { useIsMouseDown } from './useMouseDown';
import * as CSS from 'csstype';

export enum Mode {
  DRAW = 'DRAW',
  FIXED = 'FIXED',
}

export type Params = {
  dimension?: IDimension;
  onAdd?: (position: IGridPosition) => void;
};

export function useGridCursorFixed(
  ref: RefObject<HTMLDivElement>,
  gridOptions: IGridConfig,
  params: Params = {}
) {
  const [cursorCss, setCursorCss] = useState<CSS.Properties>({});
  const [areaCss, setAreaCss] = useState<CSS.Properties>({});
  const [position] = useGridPosition(ref, gridOptions);
  const { dimension, onAdd } = params;

  useEffect(() => {
    setCursorCss({
      gridArea: point(position?.y, position?.x),
      backgroundColor: 'rgba(21, 21, 30, 0.8)',
    });

    const gridArea = area(
      position?.y,
      position?.x,
      (position?.y || 0) + (dimension?.y || 0),
      (position?.x || 0) + (dimension?.x || 0)
    );

    setAreaCss({
      gridArea,
      opacity: dimension ? 0.3 : 0,
      backgroundColor: 'orange',
    });
  }, [position, dimension]);

  const onClick = useCallback(() => {
    if (!position || !dimension || !onAdd) {
      return;
    }
    onAdd(position);
  }, [dimension, position, onAdd]);

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [onClick]);

  return [cursorCss, areaCss];
}

export function useGridCursorDraw(
  ref: RefObject<HTMLDivElement>,
  gridOptions: IGridConfig
): [CSS.Properties, CSS.Properties] {
  const [cursorCss, setCursorCss] = useState<CSS.Properties>({});
  const [areaCss, setAreaCss] = useState<CSS.Properties>({});
  const [position] = useGridPosition(ref, gridOptions);
  const [startingPosition, setStartingPosition] = useState<IGridPosition>();
  const isMouseDown = useIsMouseDown(ref, () => {
    setStartingPosition(position);
  });

  useEffect(() => {
    setCursorCss({
      gridArea: point(position?.y, position?.x),
      backgroundColor: 'rgba(21, 21, 30, 0.8)',
    });

    let gridArea;

    gridArea = area(startingPosition?.y, startingPosition?.x, position?.y, position?.x);

    setAreaCss({
      gridArea,
      opacity: isMouseDown ? 0.3 : 0,
      backgroundColor: 'orange',
    });
  }, [position, startingPosition, isMouseDown]);

  return [cursorCss, areaCss];
}

const point = (y?: number, x?: number) => {
  if (!x || !y) {
    return '';
  }

  return [y, x, y, x].join('/');
};

const area = (sy?: number, sx?: number, ey?: number, ex?: number) => {
  if (!sx || !sy || !ex || !ey) {
    return '';
  }

  return [sy, sx, ey, ex].join('/');
};
