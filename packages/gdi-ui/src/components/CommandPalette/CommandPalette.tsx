import classnames from 'classnames';
import { useCallback, useEffect, useRef } from 'react';
import { useKey, useToggle } from 'react-use';
import { Bar, Wrapper } from './CommandPalette.style';
import { ICommandPaletteItem, ICommandPaletteItems, IShortKey } from './CommandPalette.types';
import { BigAutoComplete } from './_parts/BigAutoComplete/BigAutoComplete';
import { useClickAway } from './hooks/useClickAway';
import { useCustomEvent } from '../../hooks/useCustomEvent';

export type CommandPaletteProps = {
  items: ICommandPaletteItems;
  onRun: (command: ICommandPaletteItem) => void;
  isDarkMode?: boolean;
  isMac?: boolean;
  customEventId?: string;
  disableKeyListener?: boolean;
};

export function CommandPalette(props: CommandPaletteProps) {
  const { items, isMac, customEventId, disableKeyListener } = props;
  const [show, toggleShow] = useToggle(false);
  const isDarkMode = true;
  const ref = useRef<HTMLDivElement>(null);

  useKeyCode('KeyK', (ev) => {
    if (disableKeyListener) {
      return;
    }

    if ((!isMac && ev.ctrlKey) || (isMac && ev.metaKey)) {
      toggleShow();
    }
  });

  useCustomEvent(customEventId, () => toggleShow());

  useKey('Escape', () => toggleShow(false), {}, [toggleShow]);

  useClickAway(
    ref,
    () => {
      toggleShow(false);
    },
    500,
    [show]
  );

  const onRun = useCallback((command: ICommandPaletteItem) => {
    props.onRun(command);
    toggleShow(false);
  }, []);

  useKeys(items, (command: ICommandPaletteItem) => onRun(command), [items, onRun]);

  if (!show) {
    return null;
  }

  const className = classnames('CommandPalette-wrapper', {
    darkMode: isDarkMode,
  });

  return (
    <Wrapper className={className} data-testid='CommandPalette-wrapper'>
      <Bar ref={ref}>
        <BigAutoComplete isDarkMode={isDarkMode} items={items} onRun={onRun} />
      </Bar>
    </Wrapper>
  );
}

type Callback = (ev: any) => void;

function useKeys(items: ICommandPaletteItems, callback: Callback, dependenciesArray: any[]) {
  useEffect(() => {
    const checkKey = (ev: KeyboardEvent) => {
      const relevantItem = items.find((item: ICommandPaletteItem) =>
        shortKeysMatch(ev, item.shortKeys)
      );

      if (relevantItem) {
        callback(relevantItem);
      }
    };

    document.addEventListener('keydown', checkKey);
    return () => document.removeEventListener('keydown', checkKey);
  }, dependenciesArray);
}

export function shortKeysMatch(ev: KeyboardEvent, shortKeys: IShortKey[] = []) {
  if (!ev.key) {
    return;
  }

  return shortKeys.some((shortKey) => {
    const keyOk = shortKey.key === ev.key.toLowerCase();
    const metaOk = !!shortKey.withCommand == ev.metaKey;
    const altOk = !!shortKey.withAlt == ev.altKey;
    const shiftOk = !!shortKey.withShift == ev.shiftKey;
    const ctrlOk = !!shortKey.withCtrl == ev.ctrlKey;
    return keyOk && metaOk && altOk && shiftOk && ctrlOk;
  });
}

function useKeyCode(keyCode: string, callback: (ev: KeyboardEvent) => void) {
  useEffect(() => {
    const onPress = (ev: KeyboardEvent) => {
      if (ev.code === keyCode) {
        callback(ev);
      }
    };

    document.addEventListener('keydown', onPress);
    return () => document.removeEventListener('keydown', onPress);
  }, []);
}

export default CommandPalette;
