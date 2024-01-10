import { useNavigate } from 'react-router-dom';
import type { BarProps } from '../Bar/Bar';
import Icon from '../Icon/Icon';
import { Cta, Prompt, Input, Wrapper } from './BarMobile.style';
import { useState } from 'react';
import classnames from 'classnames';
import { get } from 'lodash';

export type BarMobileProps = BarProps & {};

export function BarMobile(props: BarMobileProps) {
  const { board } = props;
  const [prompt, setPrompt] = useState('');

  const isBoard = window.location.pathname.includes('/boards/');

  const isDarkMode = get(board, 'mobile.darkMode', false);
  const hidePrompt = get(board, 'mobile.hidePrompt', false);

  if (!isBoard || hidePrompt) {
    return null;
  }

  function onClick() {
    setPrompt('');
    props.onPrompt(prompt);
  }

  return (
    <Wrapper className='BarMobile-wrapper' data-testid='BarMobile-wrapper'>
      <Input
        onChange={(ev) => setPrompt(ev.target.value)}
        placeholder='Prompt'
        autoComplete='off'
        spellCheck='false'
      />
      <Cta onClick={onClick}>
        <Icon className='icon' name='send' />
      </Cta>
    </Wrapper>
  );
}

export default BarMobile;
