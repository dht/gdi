import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LinkList, LinkListProps } from './LinkList';
import { BaseComponentDriver } from 'testing-base';

export class LinkListDriver extends BaseComponentDriver {
  private props: Partial<LinkListProps> = {};

  constructor() {
    super('LinkList');
  }

  when: any = {
    rendered: () => {
      render(<LinkList {...(this.props as LinkListProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<LinkList {...(this.props as LinkListProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<LinkListProps>) => {
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
