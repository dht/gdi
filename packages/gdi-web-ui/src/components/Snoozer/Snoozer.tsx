import React, { useEffect, useRef, useState } from 'react';
import {
    Inner,
    KeyLabel,
    Notes,
    SnoozeDuration,
    Title,
    Verb,
    Wrapper,
    WrapperCountBar,
    WrapperKey,
    WrapperKeyAndDuration,
    WrapperKeys,
} from './Snoozer.style';
import classnames from 'classnames';
import { useToggle } from 'react-use';
import {
    useEnter,
    useSpace,
    useShortKeyDownUp,
    useMouseDown,
    useCountDown,
    useEscape,
} from '@gdi/hooks';

export type SnoozerProps = {
    title: string;
    shortKeys: IShortKey[];
    onCancel: () => void;
    onSubmit: (duration: string) => void;
};

export function Snoozer(props: SnoozerProps) {
    const { title, shortKeys } = props;

    const [currentKey, setCurrentKey] = useState<IShortKey>({
        id: '20m',
        key: '1',
    });

    const [isReady, animationOn, { cancel, reset }] = useCountDown(4000);

    const { id } = currentKey;

    const onClick = (shortKey: IShortKey) => {
        setCurrentKey(shortKey);
    };

    useEffect(() => {
        reset();
    }, [currentKey]);

    useEnter(() => {
        cancel();
        props.onSubmit(currentKey.id ?? '');
    }, [currentKey]);

    useSpace(() => {
        const index = shortKeys.findIndex((key) => key.id === currentKey.id);
        const nextIndex = (index + 1) % shortKeys.length;
        const nextKey = shortKeys[nextIndex];
        setCurrentKey(nextKey);
    }, [currentKey]);

    useEffect(() => {
        if (!isReady) {
            return;
        }
        cancel();
        props.onSubmit(currentKey.id ?? '');
    }, [isReady]);

    useEscape(() => {
        cancel();
        props.onCancel();
    }, [currentKey]);

    return (
        <Wrapper className='Snoozer-wrapper' data-testid='Snoozer-wrapper'>
            <Verb>Snoozing</Verb>
            <Title>{title}</Title>
            <CountBar on={animationOn} />
            <SnoozeDuration>{id}</SnoozeDuration>
            <KeyboardKeys onClick={onClick} keys={shortKeys} />
            <Notes>
                Space to nudge snooze time, Enter to snooze, Esc to dismiss
            </Notes>
        </Wrapper>
    );
}

type CountBarProps = {
    on: boolean;
};

export function CountBar(props: CountBarProps) {
    const { on } = props;

    const animationName = on ? 'count-bar' : 'count-bar-pause';

    return (
        <WrapperCountBar>
            <Inner animationName={animationName} />
        </WrapperCountBar>
    );
}

type KeyboardKeysProps = {
    keys: IShortKey[];
    onClick: (shortKey: IShortKey) => void;
};

export function KeyboardKeys(props: KeyboardKeysProps) {
    const { keys } = props;

    function renderKey(key: IShortKey) {
        return (
            <KeyAndDuration
                key={key.id}
                shortKey={key}
                onClick={props.onClick}
            />
        );
    }

    function renderKeys() {
        return keys.map((key: IShortKey) => renderKey(key));
    }

    return <WrapperKeys>{renderKeys()}</WrapperKeys>;
}

type KeyAndDurationProps = {
    shortKey: IShortKey;
    onClick: (shortKey: IShortKey) => void;
};

export function KeyAndDuration(props: KeyAndDurationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { shortKey } = props;
    const { key, description } = shortKey;
    const [isOn, toggleOn] = useToggle(false);

    const className = classnames({
        on: isOn,
    });

    useShortKeyDownUp(
        shortKey,
        () => {
            toggleOn(true);
        },
        () => {
            toggleOn(false);
            props.onClick(shortKey);
        },
        []
    );

    useMouseDown(
        ref,
        () => {
            toggleOn(true);
        },
        () => {
            toggleOn(false);
            props.onClick(shortKey);
        }
    );

    return (
        <WrapperKeyAndDuration>
            <KeyLabel>{description}</KeyLabel>
            <WrapperKey ref={ref} className={className} label={key} />
        </WrapperKeyAndDuration>
    );
}

export default Snoozer;
