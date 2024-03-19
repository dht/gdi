import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import { SavePanel } from './SavePanel';

export type SavePanelContainerProps = {
  what: string;
  verb: string;
  defaultValue?: string;
  autoProgress?: boolean;
  disabled?: boolean;
  actionTypeSave?: string;
  actionItemId?: string;
};

export function SavePanelContainer(props: SavePanelContainerProps) {
  const {
    defaultValue,
    what,
    verb,
    autoProgress,
    disabled,
    actionTypeSave = 'ASSET',
    actionItemId,
  } = props;
  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onSave: (fileName: string) => {
        dispatch({
          type: actionTypeSave,
          verb,
          id: actionItemId,
          payload: {
            fileName,
          },
        });
      },
    }),
    [actionItemId]
  );

  return (
    <SavePanel
      defaultValue={defaultValue}
      autoProgress={autoProgress}
      callbacks={callbacks}
      what={what}
      disabled={disabled}
    />
  );
}

export default SavePanelContainer;
