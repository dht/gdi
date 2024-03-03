import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SettingsPage, SettingsPageProps } from './SettingsPage';
import { BaseComponentDriver } from 'testing-base';

export class SettingsPageDriver extends BaseComponentDriver {
  private props: Partial<SettingsPageProps> = {};

  constructor() {
    super('SettingsPage');
  }

  when: any = {
    rendered: () => {
      render(<SettingsPage {...(this.props as SettingsPageProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(
        <SettingsPage {...(this.props as SettingsPageProps)} />
      );
    },
  };

  given: any = {
    props: (props: Partial<SettingsPageProps>) => {
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
