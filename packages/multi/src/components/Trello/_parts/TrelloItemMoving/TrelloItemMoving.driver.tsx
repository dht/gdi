import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TrelloItemMoving, TrelloItemMovingProps } from './TrelloItemMoving';
import { BaseComponentDriver } from 'testing-base';

export class TrelloItemMovingDriver extends BaseComponentDriver {
  private props: Partial<TrelloItemMovingProps> = {};

  constructor() {
    super('TrelloItemMoving');
  }

  when: any = {
    rendered: () => {
      render(<TrelloItemMoving {...(this.props as TrelloItemMovingProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TrelloItemMoving {...(this.props as TrelloItemMovingProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TrelloItemMovingProps>) => {
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
