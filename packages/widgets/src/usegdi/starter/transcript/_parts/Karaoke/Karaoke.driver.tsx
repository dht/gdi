import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Karaoke, KaraokeProps } from './Karaoke';
import { BaseComponentDriver } from 'testing-base';

export class KaraokeDriver extends BaseComponentDriver {
  private props: Partial<KaraokeProps> = {};

  constructor() {
    super('Karaoke');
  }

  when: any = {
    rendered: () => {
      render(<Karaoke {...(this.props as KaraokeProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Karaoke {...(this.props as KaraokeProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<KaraokeProps>) => {
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
