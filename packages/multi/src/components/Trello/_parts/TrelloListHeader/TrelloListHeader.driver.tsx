import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TrelloListHeader, TrelloListHeaderProps } from './TrelloListHeader';
import { BaseComponentDriver } from 'testing-base';

export class TrelloListHeaderDriver extends BaseComponentDriver {
  private props: Partial<TrelloListHeaderProps> = {};

  constructor() {
    super('TrelloListHeader');
  }

  when: any = {
    rendered: () => {
      render(<TrelloListHeader {...(this.props as TrelloListHeaderProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TrelloListHeader {...(this.props as TrelloListHeaderProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TrelloListHeaderProps>) => {
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
