import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import { SavePanel } from './SavePanel';

export type SavePanelContainerProps = {
  what: string;
  verb: string;
  value?: string;
  autoProgress?: boolean;
  disabled?: boolean;
};

export function SavePanelContainer(props: SavePanelContainerProps) {
  const { value, what, verb, autoProgress, disabled } = props;
  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onSave: (fileName: string) => {
        dispatch({
          type: 'ASSET',
          verb,
          payload: {
            fileName,
          },
        });
      },
    }),
    []
  );

  return (
    <SavePanel
      value={value}
      autoProgress={autoProgress}
      callbacks={callbacks}
      what={what}
      disabled={disabled}
    />
  );
}

export default SavePanelContainer;
