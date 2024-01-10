import { render, fireEvent } from '@testing-library/react';
import { Instance, InstanceProps } from './Instance';
import { BaseComponentDriver } from 'testing-base';

export class InstanceDriver extends BaseComponentDriver {
  private props: Partial<InstanceProps> = {};

  constructor() {
    super('Instance');
  }

  when: any = {
    rendered: () => {
      render(<Instance {...(this.props as InstanceProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Instance {...(this.props as InstanceProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<InstanceProps>) => {
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
