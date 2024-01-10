import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Chat, ChatProps } from './Chat';
import { BaseComponentDriver } from 'testing-base';

export class ChatDriver extends BaseComponentDriver {
  private props: Partial<ChatProps> = {};

  constructor() {
    super('Chat');
  }

  when: any = {
    rendered: () => {
      render(<Chat {...(this.props as ChatProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Chat {...(this.props as ChatProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ChatProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    WrapperClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
