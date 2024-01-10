import React, { useMemo } from 'react';
import { createContext } from 'react';
import { IHudConfig, IHudItem, IHudItemWithPoints, IHudState, IHudTimeline } from './Hud.types';
import { useSetState } from 'react-use';
import { parseItems } from './Hud.utils';
import { useTimeline } from './hooks/useTimeline';

type HudContextProps = {
  config: IHudConfig;
  items: IHudItem[];
  timeline?: IHudTimeline;
};

type IHudContext = {
  patchContext: (change: Partial<IHudState>) => void;
  state: IHudState;
  items: IHudItemWithPoints[];
};

const initialValue: IHudContext = {
  patchContext: () => {},
  state: {
    color: '#00ff15',
    width: 0,
    height: 0,
    mx: 0,
    my: 0,
  },
  items: [],
};

export const HudContext = createContext<IHudContext>(initialValue);

export const HudContextProvider = (props: WithChildren<HudContextProps>) => {
  const { config, items, timeline } = props;
  const { width, height } = config;
  const visibility = useTimeline(timeline);

  const mx = width / 2;
  const my = height / 2;

  const [state, patchContext] = useSetState<IHudState>({
    ...initialValue.state,
    ...config,
    mx,
    my,
  });

  const value = useMemo(
    () => ({
      state: state!,
      patchContext: patchContext as any,
      items: parseItems(items, visibility, {
        mx,
        my,
        width,
        height,
      }),
    }),
    [state, items, visibility]
  );

  return <HudContext.Provider value={value}>{props.children}</HudContext.Provider>;
};

type WithChildren<T> = T & {
  children?: JSX.Element | JSX.Element[];
};
