import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JsonEditor, JsonEditorProps } from './JsonEditor';
import { BaseComponentDriver } from 'testing-base';

export class JsonEditorDriver extends BaseComponentDriver {
  private props: Partial<JsonEditorProps> = {};

  constructor() {
    super('JsonEditor');
  }

  when: any = {
    rendered: () => {
      render(<JsonEditor {...(this.props as JsonEditorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<JsonEditor {...(this.props as JsonEditorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<JsonEditorProps>) => {
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
