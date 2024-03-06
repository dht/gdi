import { render, fireEvent } from '@testing-library/react';
import { Icon, IconProps } from './Icon';
import { BaseComponentDriver } from 'testing-base';

export class IconDriver extends BaseComponentDriver {
  private props: Partial<IconProps> = {};

  constructor() {
    super('Icon');
  }

  when: any = {
    rendered: () => {
      render(<Icon {...(this.props as IconProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Icon {...(this.props as IconProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<IconProps>) => {
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
