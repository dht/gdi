import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IOEditor, IOEditorProps } from './IOEditor';
import { BaseComponentDriver } from 'testing-base';

export class IOEditorDriver extends BaseComponentDriver {
  private props: Partial<IOEditorProps> = {};

  constructor() {
    super('IOEditor');
  }

  when: any = {
    rendered: () => {
      render(<IOEditor {...(this.props as IOEditorProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<IOEditor {...(this.props as IOEditorProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<IOEditorProps>) => {
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
