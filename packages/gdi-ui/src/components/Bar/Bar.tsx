import { useEffect, useRef, useState } from 'react';
import { addListener, invokeEvent } from 'shared-base';
import { MicrophoneContainer } from '../Microphone/Microphone.container';
import { IBarItem } from '../../types';
import { BarItems, Emoji, Input, Item, Modifier, Sign, Wrapper } from './Bar.style';
import classnames from 'classnames';
import { isMobile } from '../../utils/mobile';
import BarMobile from '../BarMobile/BarMobile';
import { useTime } from '../../hooks/useTime';

export type BarProps = {
  prompt: string;
  promptPlaceholder: string;
  items: IBarItem[];
  onPrompt: (prompt: string) => void;
  onItemClick: (barItem: IBarItem) => void;
  is24Hours: boolean;
  isDarkMode: boolean;
  board?: IBoard;
};

export function Bar(props: BarProps) {
  const { items = [], is24Hours, promptPlaceholder } = props;
  const [prompt, setPrompt] = useState('');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPrompt(props.prompt);
  }, [props.prompt]);

  const currentTime = useTime(is24Hours);

  function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Enter') {
      props.onPrompt(prompt);
      setPrompt('');
    }
  }

  function onFocus() {
    invokeEvent('prompt/focus');
  }

  function renderBarItem(barItem: IBarItem) {
    let { value = '', emoji, modifier, addClassName } = barItem;

    const className = classnames('barItem', {
      [value]: addClassName,
    });

    if (value.includes('$time')) {
      value = value.replace('$time', currentTime);
    }

    return (
      <Item key={barItem.id} className={className} onClick={() => props.onItemClick(barItem)}>
        {modifier && <Modifier>{modifier}</Modifier>}
        {emoji && <Emoji>{emoji}</Emoji>}
        {value}
      </Item>
    );
  }

  function renderBarItems() {
    return items
      .filter((barItem: IBarItem) => !barItem.isHidden)
      .map((barItem: IBarItem) => renderBarItem(barItem));
  }

  if (isMobile()) {
    return <BarMobile {...props} />;
  }

  return (
    <Wrapper className='Bar-wrapper' data-testid='Bar-wrapper'>
      <Sign>&gt;</Sign>
      <Input
        ref={ref}
        onChange={(ev) => setPrompt(ev.target.value)}
        onFocus={onFocus}
        value={prompt}
        onKeyDown={onKeyDown}
        placeholder={promptPlaceholder}
      />
      <MicrophoneContainer />
      <BarItems>{renderBarItems()}</BarItems>
    </Wrapper>
  );
}

export default Bar;
