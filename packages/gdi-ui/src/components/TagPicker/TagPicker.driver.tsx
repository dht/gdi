import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TagPicker, TagPickerProps } from './TagPicker';
import { BaseComponentDriver } from 'testing-base';

export class TagPickerDriver extends BaseComponentDriver {
  private props: Partial<TagPickerProps> = {};

  constructor() {
    super('TagPicker');
  }

  when: any = {
    rendered: () => {
      render(<TagPicker {...(this.props as TagPickerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<TagPicker {...(this.props as TagPickerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<TagPickerProps>) => {
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
