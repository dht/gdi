import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssistantsPanel, AssistantsPanelProps } from './AssistantsPanel';
import { BaseComponentDriver } from 'testing-base';

export class AssistantsPanelDriver extends BaseComponentDriver {
  private props: Partial<AssistantsPanelProps> = {};

  constructor() {
    super('AssistantsPanel');
  }

  when: any = {
    rendered: () => {
      render(<AssistantsPanel {...(this.props as AssistantsPanelProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<AssistantsPanel {...(this.props as AssistantsPanelProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<AssistantsPanelProps>) => {
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
