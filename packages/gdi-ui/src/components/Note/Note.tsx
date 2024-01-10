import React from 'react';
import { H3, Wrapper } from './Note.style';
import Icon from '../Icon/Icon';
import classnames from 'classnames';

export type NoteProps = {
  title: string;
  iconName: string;
  color?: string;
  children: React.ReactNode;
};

export function Note(props: NoteProps) {
  const { title, iconName, color = 'yellow' } = props;

  const className = classnames('Note-wrapper', color, {});

  return (
    <Wrapper className={className} data-testid='Note-wrapper'>
      <H3>
        <Icon className='icon' name={iconName} />
        {title}
      </H3>
      {props.children}
    </Wrapper>
  );
}

export default Note;
