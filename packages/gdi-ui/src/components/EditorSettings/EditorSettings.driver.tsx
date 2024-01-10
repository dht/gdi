import { render, fireEvent } from '@testing-library/react';
import { EditorSettings, EditorSettingsProps } from './EditorSettings';
import { BaseComponentDriver } from 'testing-base';

export class EditorSettingsDriver extends BaseComponentDriver {
  private props: Partial<EditorSettingsProps> = {};

  constructor() {
    super('EditorSettings');
  }

  when: any = {
    rendered: () => {
      render(<EditorSettings {...(this.props as EditorSettingsProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<EditorSettings {...(this.props as EditorSettingsProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<EditorSettingsProps>) => {
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
