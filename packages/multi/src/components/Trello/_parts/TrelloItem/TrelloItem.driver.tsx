import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TrelloItem, TrelloItemProps } from './TrelloItem';
import { BaseComponentDriver } from 'testing-base';

export class TrelloItemDriver extends BaseComponentDriver {
  private props: Partial<TrelloItemProps> = {};

  constructor() {
    super('TrelloItem');
  }

  when: any = {
    rendered: () => {
      render(<TrelloItem {...(this.props as TrelloItemProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TrelloItem {...(this.props as TrelloItemProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TrelloItemProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
    label: () => {
      return this.wrapper.innerHTML;
    },
  };
}
