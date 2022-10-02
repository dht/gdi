import React, { useEffect, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { Icon, Input } from '@gdi/web-base-ui';
import { invokeEvent } from 'shared-base';
import { useArrows, useEnter, useEscape, useShortKey } from '@gdi/hooks';
import { useFuzzySearchQ } from '../../hooks/useFuzzySearch';
import { useLocalStorage, useMeasure, useMount, useToggle } from 'react-use';
import {
    Container,
    Top,
    Screens,
    Screen,
    X,
    Title,
    Description,
    RoutePath,
    AppName,
} from './Switcher.style';

const COMBINATION: IShortKey = {
    key: 'ArrowUp',
    withCtrl: true,
    withAlt: true,
};

export type SwitcherProps = {
    screens: ISwitcherScreen[];
};

export type SwitcherInnerProps = SwitcherProps & {
    onClose: () => void;
};

export type ISwitcherScreen = {
    id: string;
    route: string;
    name: string;
    description: string;
    appName: string;
};

export function SwitcherInner(props: SwitcherInnerProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [animation, setAnimation] = useState('');
    const [ref, { width }] = useMeasure<HTMLDivElement>();
    const [selectedIndex, setSelectedIndex] = useLocalStorage('SWITCHER_INDEX', 0); // prettier-ignore
    const [searchTerm, setSearchTerm] = useState('');
    const { screens = [] } = props;

    const screensFiltered = useFuzzySearchQ(
        screens,
        ['name', 'description'],
        searchTerm
    );

    const numberOfScreensInRow = Math.floor(width / (300 + 2 * 10));

    useMount(() => {
        setAnimation('open');
    });

    useShortKey(
        COMBINATION,
        () => {
            onClose();
        },
        []
    );

    function onClose() {
        setAnimation('close');

        setTimeout(() => {
            props.onClose();
        }, 300);
    }

    useMount(() => {
        if (!rootRef.current) {
            return;
        }

        rootRef.current.querySelector('input')?.focus();
    });

    function onScreenSelect(screen: ISwitcherScreen) {
        navigate(screen.route);
        onClose();
    }

    useEnter(() => {
        if (typeof selectedIndex === 'undefined') {
            return;
        }

        const screen = screensFiltered[selectedIndex];
        if (!screen) {
            return;
        }
        onScreenSelect(screen);
    }, [selectedIndex, screensFiltered]);

    useEscape(() => {
        onClose();
    });

    useArrows(
        (shortKey: IShortKey) => {
            if (typeof selectedIndex === 'undefined') {
                return;
            }

            let nextIndex: number = selectedIndex;

            switch (shortKey.key) {
                case 'ArrowUp':
                    nextIndex -= numberOfScreensInRow;
                    break;
                case 'ArrowRight':
                    nextIndex++;
                    break;
                case 'ArrowDown':
                    nextIndex += numberOfScreensInRow;

                    break;
                case 'ArrowLeft':
                    nextIndex--;
                    break;
            }

            if (nextIndex < 0) {
                nextIndex = 0;
            }

            if (nextIndex >= screensFiltered.length) {
                nextIndex = screensFiltered.length - 1;
            }

            setSelectedIndex(nextIndex);
        },
        [screensFiltered, selectedIndex, numberOfScreensInRow]
    );

    useEffect(() => {
        if (typeof selectedIndex === 'undefined') {
            return;
        }

        if (selectedIndex < 0) {
            setSelectedIndex(0);
        }

        if (selectedIndex >= screensFiltered.length) {
            setSelectedIndex(screensFiltered.length - 1);
        }
    }, [searchTerm]);

    function onChange(ev: any) {
        setSearchTerm(ev.target.value);
    }

    function renderScreen(screen: ISwitcherScreen, index: number) {
        const { name, description, route, appName = '' } = screen;

        const classNameScreen = classnames('screen', {
            selected: selectedIndex === index,
        });

        return (
            <Screen
                key={screen.id}
                className={classNameScreen}
                onClick={() => onScreenSelect(screen)}
            >
                <Title>{name}</Title>
                <Description>{description}</Description>
                <RoutePath>{route}</RoutePath>
                <AppName>{appName}</AppName>
            </Screen>
        );
    }

    function renderScreens() {
        return screensFiltered.map((screen: ISwitcherScreen, index) =>
            renderScreen(screen, index)
        );
    }

    const className = classnames('Switcher-container', animation);

    return (
        <Container
            ref={rootRef}
            className={className}
            data-testid='Switcher-container'
        >
            <Top>
                <Input value={searchTerm} onChange={onChange} />
            </Top>
            <Screens ref={ref}>{renderScreens()}</Screens>

            <X onClick={onClose}>
                <Icon iconName='cancel'></Icon>
            </X>
        </Container>
    );
}

const navigate = (path: string) => {
    invokeEvent('navigate', { path });
};

export function Switcher(props: SwitcherProps) {
    const [open, toggleOpen] = useToggle(false);

    useShortKey(
        COMBINATION,
        () => {
            if (open) {
                return;
            }

            toggleOpen();
        },
        [open]
    );

    if (!open) {
        return null;
    }

    return <SwitcherInner {...props} onClose={toggleOpen} />;
}

export default Switcher;
