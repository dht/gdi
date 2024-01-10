import { render, fireEvent } from '@testing-library/react';
import { BigAutoComplete, BigAutoCompleteProps } from './BigAutoComplete';
import { BaseComponentDriver } from 'testing-base';

export class BigAutoCompleteDriver extends BaseComponentDriver {
  private props: Partial<BigAutoCompleteProps> = {};

  constructor() {
    super('BigAutoComplete');
  }

  when: any = {
    rendered: () => {
      render(<BigAutoComplete {...(this.props as BigAutoCompleteProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<BigAutoComplete {...(this.props as BigAutoCompleteProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<BigAutoCompleteProps>) => {
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
