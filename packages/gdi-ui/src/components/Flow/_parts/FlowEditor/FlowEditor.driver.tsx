import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlowEditor, FlowEditorProps } from './FlowEditor';
import { BaseComponentDriver } from 'testing-base';

export class FlowEditorDriver extends BaseComponentDriver {
  private props: Partial<FlowEditorProps> = {};

  constructor() {
    super('FlowEditor');
  }

  when: any = {
    rendered: () => {
      render(<FlowEditor {...(this.props as FlowEditorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<FlowEditor {...(this.props as FlowEditorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<FlowEditorProps>) => {
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
