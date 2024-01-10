import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Todos, TodosProps } from './Todos';
import { BaseComponentDriver } from 'testing-base';

export class TodosDriver extends BaseComponentDriver {
  private props: Partial<TodosProps> = {};

  constructor() {
    super('Todos');
  }

  when: any = {
    rendered: () => {
      render(<Todos {...(this.props as TodosProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Todos {...(this.props as TodosProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TodosProps>) => {
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
