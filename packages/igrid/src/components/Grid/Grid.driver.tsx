import { render, fireEvent } from '@testing-library/react';
import { GridInner, GridInnerProps } from './Grid';
import { BaseComponentDriver } from 'testing-base';

export class GridDriver extends BaseComponentDriver {
  private props: Partial<GridInnerProps> = {};

  constructor() {
    super('Grid');
  }

  when: any = {
    rendered: () => {
      render(<GridInner {...(this.props as GridInnerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<GridInner {...(this.props as GridInnerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GridInnerProps>) => {
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
