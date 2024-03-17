import React from 'react';
import { render, fireTodo } from '@testing-library/react';
import { TodosSummary, TodosSummaryProps } from './TodosSummary';
import { BaseComponentDriver } from 'testing-base';

export class TodosSummaryDriver extends BaseComponentDriver {
  private props: Partial<TodosSummaryProps> = {};

  constructor() {
    super('TodosSummary');
  }

  when: any = {
    rendered: () => {
      render(<TodosSummary {...(this.props as TodosSummaryProps)} />);
      return this;
    },
    clicked: () => {
      fireTodo.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TodosSummary {...(this.props as TodosSummaryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TodosSummaryProps>) => {
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
