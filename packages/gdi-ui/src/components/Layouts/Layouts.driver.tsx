import { render, fireEvent } from '@testing-library/react';
import { LayoutSingleColumn, LayoutProps } from './Layouts';
import { BaseComponentDriver } from 'testing-base';

export class LayoutsDriver extends BaseComponentDriver {
  private props: Partial<LayoutProps> = {};

  constructor() {
    super('Layouts');
  }

  when: any = {
    rendered: () => {
      render(<LayoutSingleColumn {...(this.props as LayoutProps)} />);
      return this;
    },
    click: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
  };

  given: any = {
    props: (props: Partial<LayoutProps>) => {
      this.props = props;
      return this;
    },
  };

  get = {
    containerClassName: () => {
      return this.wrapper.className;
    },
  };
}
