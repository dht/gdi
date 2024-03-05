import React from 'react';
import { H3, Wrapper } from './Note.style';
import Icon from '../Icon/Icon';
import classnames from 'classnames';

export type NoteProps = {
  title?: string;
  iconName?: string;
  color?: string;
  children: React.ReactNode;
  darkMode?: boolean;
};

export function Note(props: NoteProps) {
  const { title, iconName, color = 'yellow', darkMode } = props;

  const className = classnames('Note-wrapper', color, {
    dark: darkMode,
  });

  function renderHeader() {
    if (!title) return null;

    return (
      <H3>
        {iconName && <Icon className='icon' name={iconName} />}
        {title}
      </H3>
    );
  }

  return (
    <Wrapper className={className} data-testid='Note-wrapper'>
      {renderHeader()}
      {props.children}
    </Wrapper>
  );
}

export default Note;
