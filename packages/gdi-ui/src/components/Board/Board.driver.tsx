import { render, fireEvent } from '@testing-library/react';
import { Board, BoardProps } from './Board';
import { BaseComponentDriver } from 'testing-base';

export class BoardDriver extends BaseComponentDriver {
  private props: Partial<BoardProps> = {};

  constructor() {
    super('Board');
  }

  when: any = {
    rendered: () => {
      render(<Board {...(this.props as BoardProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Board {...(this.props as BoardProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BoardProps>) => {
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
