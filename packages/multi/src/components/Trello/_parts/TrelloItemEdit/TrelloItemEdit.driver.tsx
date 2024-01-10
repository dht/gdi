import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TrelloItemEdit, TrelloItemEditProps } from './TrelloItemEdit';
import { BaseComponentDriver } from 'testing-base';

export class TrelloItemEditDriver extends BaseComponentDriver {
  private props: Partial<TrelloItemEditProps> = {};

  constructor() {
    super('TrelloItemEdit');
  }

  when: any = {
    rendered: () => {
      render(<TrelloItemEdit {...(this.props as TrelloItemEditProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TrelloItemEdit {...(this.props as TrelloItemEditProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TrelloItemEditProps>) => {
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
