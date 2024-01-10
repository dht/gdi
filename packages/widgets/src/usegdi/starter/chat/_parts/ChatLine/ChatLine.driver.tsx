import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChatLine, ChatLineProps } from './ChatLine';
import { BaseComponentDriver } from 'testing-base';

export class ChatLineDriver extends BaseComponentDriver {
  private props: Partial<ChatLineProps> = {};

  constructor() {
    super('ChatLine');
  }

  when: any = {
    rendered: () => {
      render(<ChatLine {...(this.props as ChatLineProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ChatLine {...(this.props as ChatLineProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ChatLineProps>) => {
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
