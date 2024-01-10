import { createContext, useMemo } from 'react';
import { useSetState } from 'react-use';

type WarholContextProps = {
  root: string;
  frames: Json[];
};

type WarholState = {
  root: string;
};

type WarholContext = {
  patchState: (change: Partial<WarholState>) => void;
  state: WarholState;
  data: Json[];
};

const initialValue: WarholContext = {
  patchState: () => {},
  state: {
    root: '',
  },
  data: [],
};

export const WarholContext = createContext<WarholContext>(initialValue);

export const WarholContextProvider = (props: WithChildren<WarholContextProps>) => {
  const { root, frames } = props;

  const [state, patchState] = useSetState<WarholState>({
    root,
  });

  const data = useMemo(() => {
    return frames.map((frame) => {
      return {
        ...frame,
        imageUrl: `${root}${frame.imageUrl}`,
      };
    });
  }, [root, frames]);

  const value = useMemo(
    () => ({
      state: state!,
      patchState: patchState as any,
      data,
    }),
    [state, data]
  );

  return <WarholContext.Provider value={value}>{props.children}</WarholContext.Provider>;
};

type WithChildren<T> = T & {
  children?: JSX.Element | JSX.Element[];
};
