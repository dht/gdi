import React from 'react';
import { Avatar, Name, Wrapper } from './MuxMessageAuthor.style';
import classnames from 'classnames';

export type MuxMessageAuthorProps = {
  role: 'user' | 'assistant';
};

export function MuxMessageAuthor(props: MuxMessageAuthorProps) {
  const { role } = props;

  const name = role === 'user' ? 'You' : 'ChatGPT';

  const className = classnames('avatar', role, {});

  return (
    <Wrapper
      className='MuxMessageAuthor-wrapper'
      data-testid='MuxMessageAuthor-wrapper'
    >
      <Avatar className={className} />
      <Name>{name}</Name>
    </Wrapper>
  );
}

export default MuxMessageAuthor;
