import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditorSchema, EditorSchemaProps } from './EditorSchema';
import { BaseComponentDriver } from 'testing-base';

export class EditorSchemaDriver extends BaseComponentDriver {
  private props: Partial<EditorSchemaProps> = {};

  constructor() {
    super('EditorSchema');
  }

  when: any = {
    rendered: () => {
      render(<EditorSchema {...(this.props as EditorSchemaProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EditorSchema {...(this.props as EditorSchemaProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EditorSchemaProps>) => {
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
