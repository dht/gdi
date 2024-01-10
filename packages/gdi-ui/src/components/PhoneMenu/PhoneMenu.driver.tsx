import { fireEvent, render } from '@testing-library/react';
import { BaseComponentDriver } from 'testing-base';
import { PhoneMenu, PhoneMenuProps } from './PhoneMenu';

export class PhoneMenuDriver extends BaseComponentDriver {
  private props: Partial<PhoneMenuProps> = {};

  constructor() {
    super('PhoneMenu');
  }

  when: any = {
    rendered: () => {
      render(<PhoneMenu {...(this.props as PhoneMenuProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<PhoneMenu {...(this.props as PhoneMenuProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PhoneMenuProps>) => {
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
