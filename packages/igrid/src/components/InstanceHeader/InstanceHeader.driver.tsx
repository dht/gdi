import { render, fireEvent } from '@testing-library/react';
import { InstanceHeader, InstanceHeaderProps } from './InstanceHeader';
import { BaseComponentDriver } from 'testing-base';

export class InstanceHeaderDriver extends BaseComponentDriver {
  private props: Partial<InstanceHeaderProps> = {};

  constructor() {
    super('InstanceHeader');
  }

  when: any = {
    rendered: () => {
      render(<InstanceHeader {...(this.props as InstanceHeaderProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<InstanceHeader {...(this.props as InstanceHeaderProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<InstanceHeaderProps>) => {
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
