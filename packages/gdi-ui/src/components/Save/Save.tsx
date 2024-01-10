import React from 'react';
import { Wrapper } from './Save.style';
import { useKey } from 'react-use';
import { isMobile } from '../../utils/mobile';

export type SaveProps = {
  what: string;
  disabled?: boolean;
  onClick: () => void;
};

export function Save(props: SaveProps) {
  const { what, disabled } = props;

  const isMac = navigator.userAgent.toLowerCase().indexOf('mac') >= 0;
  let shortKey = isMac ? '(⌘S)' : '(Ctrl+S)';

  if (isMobile()) {
    shortKey = '';
  }

  useKey(
    's',
    (ev) => {
      if (!ev.metaKey || disabled) return;
      ev.preventDefault();
      props.onClick();
    },
    {},
    [disabled]
  );

  return (
    <Wrapper
      className='Save-wrapper'
      data-testid='Save-wrapper'
      disabled={disabled}
      onClick={props.onClick}
    >
      Save {isMobile() ? '' : what} {shortKey}
    </Wrapper>
  );
}

export default Save;
