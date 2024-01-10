import { render, fireEvent } from '@testing-library/react';
import { ContextBar, ContextBarProps } from './ContextBar';
import { BaseComponentDriver } from 'testing-base';

export class ContextBarDriver extends BaseComponentDriver {
  private props: Partial<ContextBarProps> = {};

  constructor() {
    super('ContextBar');
  }

  when: any = {
    rendered: () => {
      render(<ContextBar {...(this.props as ContextBarProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ContextBar {...(this.props as ContextBarProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ContextBarProps>) => {
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
