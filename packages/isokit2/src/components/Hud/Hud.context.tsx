import { createContext, useMemo } from 'react';
import { useSetState } from 'react-use';
import { IHud, IHudItemWithPoints, IHudState } from './Hud.types';
import { parseItems } from './Hud.utils';
import { useCameraPosition } from './hooks/useCameraPosition';
import { useTimeline } from './hooks/useTimeline';

type HudContextProps = {
  hud: IHud;
  loop?: boolean;
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
  const { hud, loop } = props;

  const { config, items } = hud;
  const { width, height } = config;
  const visibility = useTimeline(items, loop);

  useCameraPosition(items, config.initialPosition);

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
