import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Trello, TrelloProps } from './Trello';
import { BaseComponentDriver } from 'testing-base';

export class TrelloDriver extends BaseComponentDriver {
  private props: Partial<TrelloProps> = {};

  constructor() {
    super('Trello');
  }

  when: any = {
    rendered: () => {
      render(<Trello {...(this.props as TrelloProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Trello {...(this.props as TrelloProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TrelloProps>) => {
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
