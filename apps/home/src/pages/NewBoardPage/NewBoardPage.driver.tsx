import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewBoardPage, NewBoardPageProps } from './NewBoardPage';
import { BaseComponentDriver } from 'testing-base';

export class NewBoardPageDriver extends BaseComponentDriver {
  private props: Partial<NewBoardPageProps> = {};

  constructor() {
    super('NewBoardPage');
  }

  when: any = {
    rendered: () => {
      render(<NewBoardPage {...(this.props as NewBoardPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <NewBoardPage {...(this.props as NewBoardPageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<NewBoardPageProps>) => {
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
