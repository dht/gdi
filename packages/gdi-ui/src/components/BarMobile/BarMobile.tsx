import { useNavigate } from 'react-router-dom';
import type { BarProps } from '../Bar/Bar';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import { Cta, Prompt, Input, TopRight, Wrapper } from './BarMobile.style';
import { useState } from 'react';
import classnames from 'classnames';
import { get } from 'lodash';

export type BarMobileProps = BarProps & {};

export function BarMobile(props: BarMobileProps) {
  const { board } = props;
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');

  const isBoard = window.location.pathname.includes('/boards/');

  const isDarkMode = get(board, 'mobile.darkMode', false);
  const hidePrompt = get(board, 'mobile.hidePrompt', false);

  if (!isBoard) {
    return null;
  }

  function onLogoClick() {
    navigate('/');
  }

  function onClick() {
    setPrompt('');
    props.onPrompt(prompt);
  }

  function renderPrompt() {
    const classNamePrompt = classnames({
      show: !hidePrompt,
    });

    return (
      <Prompt className={classNamePrompt}>
        <Input
          onChange={(ev) => setPrompt(ev.target.value)}
          placeholder='Prompt'
          autoComplete='off'
          spellCheck='false'
        />
        <Cta onClick={onClick}>
          <Icon className='icon' name='send' />
        </Cta>
      </Prompt>
    );
  }

  const className = classnames({
    darkMode: isDarkMode,
  });

  return (
    <Wrapper className='BarMobile-wrapper' data-testid='BarMobile-wrapper'>
      {renderPrompt()}
      <TopRight className={className} onClick={onLogoClick}>
        <Logo darkMode={isDarkMode} size={20} onClick={onLogoClick} />
      </TopRight>
    </Wrapper>
  );
}

export default BarMobile;
