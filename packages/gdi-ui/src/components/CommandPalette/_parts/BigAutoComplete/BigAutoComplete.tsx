import classnames from 'classnames';
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useBoolean, useCounter, useKey, useMount } from 'react-use';
import { ICommandPaletteItem, ICommandPaletteItems, IShortKey } from '../../CommandPalette.types';
import { useClickAway } from '../../hooks/useClickAway';
import { useFuzzySearch } from '../../hooks/useFuzzySearch';
import { useSilentKey } from '../../hooks/useSilentKey';
import { Part, colorize } from '../../utils/colorize';
import {
  Bar,
  ColorPart,
  ColorizedTitleWrapper,
  Input,
  KeyWrapper,
  NonColorPart,
  OptionKeys,
  OptionWrapper,
  Options,
  ShortKeyWrapper,
  Wrapper,
} from './BigAutoComplete.style';

export type BigAutoCompleteProps = {
  items: ICommandPaletteItems;
  onRun: (command: ICommandPaletteItem) => void;
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

  const [highlightedIndex, { inc, dec, reset }] = useCounter(0, optionsFiltered.length - 1, 0);

  const onRun = useCallback((option: ICommandPaletteItem) => {
    props.onRun(option);
    toggleOptions(false);
    setTerm('');
  }, []);

  useClickAway(ref, () => {
    toggleOptions(false);
  });

  // ==== main actions ====
  const onClick = useCallback((option: ICommandPaletteItem) => {
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

  function renderOption(option: ICommandPaletteItem, index: number) {
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
      .map((option: ICommandPaletteItem, index: number) => renderOption(option, index));
  }

  function onChange(ev: ChangeEvent<HTMLInputElement>) {
    toggleOptions(true);
    setTerm(ev.target.value);
  }

  const className = classnames('BigAutoComplete-wrapper', {
    darkMode: isDarkMode,
  });

  return (
    <Wrapper className={className} data-testid='BigAutoComplete-wrapper' ref={ref}>
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
  option: ICommandPaletteItem;
  term: string;
  highlighted: boolean;
  onClick: (option: ICommandPaletteItem) => void;
};

export const Option = (props: OptionProps) => {
  const { option, term, highlighted } = props;
  const { label, shortKeys = [] } = option;

  const className = classnames({ selected: highlighted });

  return (
    <OptionWrapper className={className} onClick={() => props.onClick(option)}>
      <ColorizedTitle title={label} term={term} />
      <OptionKeys>
        {shortKeys.map((key: IShortKey, index: number) => (
          <ShortKey key={index} value={key} highlighted={highlighted} />
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
    return parts.map((part: Part, index: number) => renderPart(part, index));
  }

  return <ColorizedTitleWrapper>{renderParts()}</ColorizedTitleWrapper>;
}

export default BigAutoComplete;
