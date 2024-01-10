import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Note, NoteProps } from './Note';
import { BaseComponentDriver } from 'testing-base';

export class NoteDriver extends BaseComponentDriver {
  private props: Partial<NoteProps> = {};

  constructor() {
    super('Note');
  }

  when: any = {
    rendered: () => {
      render(<Note {...(this.props as NoteProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Note {...(this.props as NoteProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<NoteProps>) => {
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
