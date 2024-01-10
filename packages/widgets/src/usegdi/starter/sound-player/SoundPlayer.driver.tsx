import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SoundPlayer, SoundPlayerProps } from './SoundPlayer';
import { BaseComponentDriver } from 'testing-base';

export class SoundPlayerDriver extends BaseComponentDriver {
  private props: Partial<SoundPlayerProps> = {};

  constructor() {
    super('SoundPlayer');
  }

  when: any = {
    rendered: () => {
      render(<SoundPlayer {...(this.props as SoundPlayerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<SoundPlayer {...(this.props as SoundPlayerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SoundPlayerProps>) => {
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
