import React, {
    ChangeEvent,
    useCallback,
    useMemo,
    useEffect,
    useState,
    useRef,
} from 'react';
import classnames from 'classnames';
import { colorize, Part } from '../../utils/colorize';
import { useBoolean, useCounter, useKey, useMount } from 'react-use';
import { useClickAway } from '@gdi/hooks';
import { useFuzzySearch } from '../../hooks/useFuzzySearch';
import { useSilentKey } from '../../hooks/useSilentKey';

import {
    Wrapper,
    Bar,
    Input,
    Options,
    OptionWrapper,
    KeyWrapper,
    OptionKeys,
    ShortKeyWrapper,
    ColorizedTitleWrapper,
    ColorPart,
    NonColorPart,
} from './BigAutoComplete.style';

export type BigAutoCompleteProps = {
    items: ICommandBarItems;
    onRun: (command: ICommandBarItem) => void;
    isDarkMode?: boolean;
};

export function BigAutoComplete(props: BigAutoCompleteProps) {
    const { items, isDarkMode } = props;
    const search = useFuzzySearch(items, ['label']);
    const [term, setTerm] = useState('');
    const [isFocus, setIsFocus] = useBoolean(false);
    const [showOptions, toggleOptions] = useBoolean(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    const optionsFiltered = useMemo(() => {
        const output = search(term);
        return term ? output.map((fuseResult) => fuseResult.item) : items;
    }, [term]);

    const [highlightedIndex, { inc, dec, reset }] = useCounter(
        0,
        optionsFiltered.length
    );

    const onRun = useCallback((option: ICommandBarItem) => {
        props.onRun(option);
        toggleOptions(false);
        setTerm('');
    }, []);

    useClickAway(ref, () => {
        toggleOptions(false);
    });

    // ==== main actions ====
    const onClick = useCallback((option: ICommandBarItem) => {
        onRun(option);
    }, []);

    const onEnter = useCallback(() => {
        const option = optionsFiltered[highlightedIndex];
        onRun(option);
    }, [highlightedIndex, optionsFiltered]);

    // ==== key binding ====
    useSilentKey('ArrowUp', () => dec(), isFocus, [dec]);
    useSilentKey('ArrowDown', () => inc(), isFocus, [inc]);
    useSilentKey('Enter', () => onEnter(), isFocus, [onEnter]);
    useEffect(() => reset(), [term]);
    useKey('Escape', () => toggleOptions(false), {}, []);

    useMount(() => {
        inputRef.current?.select();
    });

    function renderOption(option: ICommandBarItem, index: number) {
        return (
            <Option
                onClick={onClick}
                option={option}
                highlighted={index === highlightedIndex}
                key={index}
                term={term}
            />
        );
    }

    function renderOptions() {
        if (!showOptions) {
            return;
        }

        return [...optionsFiltered]
            .splice(0, 10)
            .map((option: ICommandBarItem, index: number) =>
                renderOption(option, index)
            );
    }

    function onChange(ev: ChangeEvent<HTMLInputElement>) {
        toggleOptions(true);
        setTerm(ev.target.value);
    }

    const className = classnames('BigAutoComplete-wrapper', {
        darkMode: isDarkMode,
    });

    return (
        <Wrapper
            className={className}
            data-testid='BigAutoComplete-wrapper'
            ref={ref}
        >
            <Bar>
                <Input
                    ref={inputRef}
                    value={term}
                    onChange={onChange}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    type='text'
                />
                <Options>{renderOptions()}</Options>
            </Bar>
        </Wrapper>
    );
}

type ShortKeyProps = {
    value: IShortKey;
    highlighted: boolean;
};

export const ShortKey = (props: ShortKeyProps) => {
    const { value, highlighted } = props;
    const { key, withAlt, withCommand, withShift, withCtrl } = value;

    const className = classnames({
        selected: highlighted,
    });

    return (
        <ShortKeyWrapper>
            {withCtrl && <KeyWrapper className={className}>^</KeyWrapper>}
            {withShift && <KeyWrapper className={className}>⇧</KeyWrapper>}
            {withCommand && <KeyWrapper className={className}>⌘</KeyWrapper>}
            {withAlt && <KeyWrapper className={className}>⎇</KeyWrapper>}
            <KeyWrapper className={className}>{key}</KeyWrapper>
        </ShortKeyWrapper>
    );
};

type OptionProps = {
    option: ICommandBarItem;
    term: string;
    highlighted: boolean;
    onClick: (option: ICommandBarItem) => void;
};

export const Option = (props: OptionProps) => {
    const { option, term, highlighted } = props;
    const { label, shortKeys = [] } = option;

    const className = classnames({ selected: highlighted });

    return (
        <OptionWrapper
            className={className}
            onClick={() => props.onClick(option)}
        >
            <ColorizedTitle title={label} term={term} />
            <OptionKeys>
                {shortKeys.map((key: IShortKey, index: number) => (
                    <ShortKey
                        key={index}
                        value={key}
                        highlighted={highlighted}
                    />
                ))}
            </OptionKeys>
        </OptionWrapper>
    );
};

type ColorizedTitleProps = {
    title: string;
    term: string;
};

function ColorizedTitle(props: ColorizedTitleProps) {
    const { title, term } = props;

    const parts = useMemo(() => {
        return colorize(title, term);
    }, [title, term]);

    function renderPart(part: Part, index: number) {
        const { text, isColorful } = part;

        return isColorful ? (
            <ColorPart key={index} className='part'>
                {text}
            </ColorPart>
        ) : (
            <NonColorPart key={index}>{text}</NonColorPart>
        );
    }

    function renderParts() {
        return parts.map((part: Part, index: number) =>
            renderPart(part, index)
        );
    }

    return <ColorizedTitleWrapper>{renderParts()}</ColorizedTitleWrapper>;
}

export default BigAutoComplete;
