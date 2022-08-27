import classnames from 'classnames';
import { useCallback, useEffect } from 'react';
import { useKey } from 'react-use';
import { Container, Bar } from './CommandBar.style';
import { useToggle } from 'react-use';
import BigAutoComplete from '../BigAutoComplete/BigAutoComplete';

export type CommandBarProps = {
    items: ICommandBarItems;
    onRun: (command: ICommandBarItem) => void;
    isDarkMode?: boolean;
};

export function CommandBar(props: CommandBarProps) {
    const { items } = props;
    const [show, toggleShow] = useToggle(false);
    const isDarkMode = true;

    useKeyCode('KeyK', (ev) => {
        if (ev.altKey || ev.metaKey) {
            toggleShow();
        }
    });

    useKey('Escape', () => toggleShow(false), {}, [toggleShow]);

    const onRun = useCallback((command: ICommandBarItem) => {
        toggleShow(false);
        props.onRun(command);
    }, []);

    useKeys(items, (command: ICommandBarItem) => onRun(command), [
        items,
        onRun,
    ]);

    if (!show) {
        return null;
    }

    const className = classnames('CommandBar-container', {
        darkMode: isDarkMode,
    });

    return (
        <Container className={className} data-testid='CommandBar-container'>
            <Bar>
                <BigAutoComplete
                    isDarkMode={isDarkMode}
                    items={items}
                    onRun={onRun}
                />
            </Bar>
        </Container>
    );
}

type Callback = (ev: any) => void;

function useKeys(
    items: ICommandBarItems,
    callback: Callback,
    dependenciesArray: any[]
) {
    useEffect(() => {
        const checkKey = (ev: KeyboardEvent) => {
            const relevantItem = items.find((item: ICommandBarItem) =>
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

function shortKeysMatch(ev: KeyboardEvent, shortKeys: IShortKey[] = []) {
    if (!ev.key) {
        return;
    }

    return shortKeys.some((shortKey) => {
        const keyOk = shortKey.key === ev.key.toLocaleLowerCase();
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

export default CommandBar;
