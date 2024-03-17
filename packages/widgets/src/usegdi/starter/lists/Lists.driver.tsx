import React from 'react';
import { render, fireList } from '@testing-library/react';
import { Lists, ListsProps } from './Lists';
import { BaseComponentDriver } from 'testing-base';

export class ListsDriver extends BaseComponentDriver {
  private props: Partial<ListsProps> = {};

  constructor() {
    super('Lists');
  }

  when: any = {
    rendered: () => {
      render(<Lists {...(this.props as ListsProps)} />);
      return this;
    },
    clicked: () => {
      fireList.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Lists {...(this.props as ListsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ListsProps>) => {
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
