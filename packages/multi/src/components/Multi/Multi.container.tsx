import { useEffect, useMemo } from 'react';
import { Json } from '../../types';
import { Multi } from './Multi';
import { MultiProvider } from './Multi.context';
import { IMultiCallbacks, IMultiConfig, IMultiView } from '../../types';
import { addListener } from 'shared-base';

export type MultiContainerProps = {
  initialView: IMultiView;
  views: IMultiView[];
  config: IMultiConfig;
  callbacks: IMultiCallbacks;
  data: Json[];
  darkMode?: boolean;
  children?: React.ReactNode;
};

export function MultiContainer(props: MultiContainerProps) {
  const { callbacks, config, views, initialView, data, darkMode } = props;

  const initialState = useMemo(
    () => ({
      config,
      views,
      activeView: initialView,
      data,
      darkMode,
    }),
    []
  );

  useEffect(() => {
    const unListen1 = addListener('multi/item', (ev: any) => {
      console.log('ev ->', ev);
      // callbacks.onItemAction('id', 'verb', {});
    });
    const unListen2 = addListener('multi', (ev) => {
      console.log('ev ->', ev);
      // callbacks.onAction( 'verb', {});
    });

    return () => {
      unListen1();
      unListen2();
    };
  }, [callbacks]);

  return (
    <MultiProvider callbacks={callbacks} state={initialState} data={data}>
      <Multi>{props.children}</Multi>
    </MultiProvider>
  );
}

export default MultiContainer;
