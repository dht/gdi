import { createContext, useEffect, useMemo } from 'react';
import { useSetState, useWindowSize } from 'react-use';
import styled from 'styled-components';
import {
  GridProviderProps,
  IElement,
  IGridConfig,
  IGridContext,
  IGridState,
} from '../../grid.types';
import { findResolution } from '../../utils/resolutions';
import { noMobile } from './Grid.mobile';

export const initialState: IGridState = {
  id: '',
  flavour: 'default',
  columnIndex: 0,
  columns: 0,
  showToggle: false,
};

export const defaultConfig: IGridConfig = {
  initialMode: 'view',
  allowEditing: false,
};

export const GridContext = createContext<IGridContext>({
  config: {
    ...defaultConfig,
  },
  state: {
    ...initialState,
  },
  elements: {},
  callbacks: {
    renderElement: (_instance: IElement) => <div />,
    renderInfo: (_instance: IElement) => <div />,
    onColumnChange: (_columnIndex: number) => {},
  },
  patchState: () => {},
});

export const GridProvider = (props: GridProviderProps) => {
  const { id, flavour, columnIndex, widgets, elements, isMobileSupported, columns } = props;
  const [state, patchState] = useSetState<IGridState>(initialState);
  const { width } = useWindowSize();

  const resolution = useMemo(() => {
    return findResolution(width) || 'default';
  }, [width]);

  const elementsForResolution = useMemo(() => {
    if (!isMobileSupported && resolution === 'mobile') {
      // return noMobile;
    }

    return (elements as any)[resolution] ?? elements['default'] ?? {};
  }, [elements, resolution, isMobileSupported]);

  useEffect(() => {
    patchState({ id });
  }, [id]);

  useEffect(() => {
    patchState({ flavour, columnIndex, columns });
  }, [flavour, columnIndex, columns]);

  const callbacks = useMemo(
    () => ({
      renderElement: (instance: IElement) => {
        const widget = widgets[instance.widgetId ?? ''];

        if (!widget || !widget.component) {
          console.log('no widget by id: ', instance.widgetId);
          return <div />;
        }

        return widget.component(instance);
      },
      renderInfo: (_instance: IElement) => {
        return <div />;
      },
      onColumnChange: (columnIndex: number) => {
        props.callbacks?.onColumnChange?.(columnIndex);
      },
    }),
    [state, widgets, elements]
  );

  const config = useMemo(
    () => ({
      ...defaultConfig,
      ...props.config,
    }),
    [props.config]
  );

  const cValue = useMemo(
    () => ({
      config,
      state,
      elements: elementsForResolution,
      callbacks,
      patchState,
    }),
    [state, config, widgets, elementsForResolution]
  );

  return (
    <GridContext.Provider value={cValue}>
      <Wrapper>{props.children}</Wrapper>
    </GridContext.Provider>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
