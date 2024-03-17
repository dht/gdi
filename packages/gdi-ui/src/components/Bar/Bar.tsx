import { useEffect, useRef, useState } from 'react';
import { invokeEvent } from 'shared-base';
import { IBarItem } from '../../types';
import { isMobile } from '../../utils/mobile';
import { BarMobile } from '../BarMobile/BarMobile';
import { MicrophoneContainer } from '../Microphone/Microphone.container';
import { BarItem } from './Bar.components';
import { BarItems, Input, Sign, Wrapper } from './Bar.style';

export type BarProps = {
  prompt: string;
  promptPlaceholder: string;
  items: IBarItem[];
  onPrompt: (prompt: string) => void;
  onItemClick: (barItem: IBarItem) => void;
  is24Hours: boolean;
  isDarkMode: boolean;
  board?: any;
};

export function Bar(props: BarProps) {
  const { items = [], is24Hours, promptPlaceholder } = props;
  const [prompt, setPrompt] = useState('');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPrompt(props.prompt);
  }, [props.prompt]);

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
    return (
      <BarItem
        key={barItem.id}
        barItem={barItem}
        onClick={() => props.onItemClick(barItem)}
        is24Hours={is24Hours}
      />
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
