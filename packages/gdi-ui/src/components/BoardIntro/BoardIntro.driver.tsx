import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BoardIntro, BoardIntroProps } from './BoardIntro';
import { BaseComponentDriver } from 'testing-base';

export class BoardIntroDriver extends BaseComponentDriver {
  private props: Partial<BoardIntroProps> = {};

  constructor() {
    super('BoardIntro');
  }

  when: any = {
    rendered: () => {
      render(<BoardIntro {...(this.props as BoardIntroProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<BoardIntro {...(this.props as BoardIntroProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BoardIntroProps>) => {
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
