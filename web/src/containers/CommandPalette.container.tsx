import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { CommandPalette } from '@gdi/ui';
import { invokeEvent } from 'shared-base';
import { commandPaletteItems } from '../config/config.commands';

export const CommandPaletteContainer = () => {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const isMac = appState.isMac;

  function onCommandBar(item: any) {
    const { action, actionId } = item;

    if (action) {
      dispatch(action);
    } else if (actionId) {
      dispatch({ type: actionId });
    } else {
      invokeEvent(item.id);
    }
  }

  return (
    <CommandPalette
      items={commandPaletteItems}
      onRun={onCommandBar}
      isMac={isMac}
      disableKeyListener
      customEventId='bar/commandPalette'
    />
  );
};
