import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BoardDetailsPage, BoardDetailsPageProps } from './BoardDetailsPage';
import { BaseComponentDriver } from 'testing-base';

export class BoardDetailsPageDriver extends BaseComponentDriver {
  private props: Partial<BoardDetailsPageProps> = {};

  constructor() {
    super('BoardDetailsPage');
  }

  when: any = {
    rendered: () => {
      render(<BoardDetailsPage {...(this.props as BoardDetailsPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <BoardDetailsPage {...(this.props as BoardDetailsPageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<BoardDetailsPageProps>) => {
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
