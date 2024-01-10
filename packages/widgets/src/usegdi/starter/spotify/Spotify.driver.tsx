import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Spotify, SpotifyProps } from './Spotify';
import { BaseComponentDriver } from 'testing-base';

export class SpotifyDriver extends BaseComponentDriver {
  private props: Partial<SpotifyProps> = {};

  constructor() {
    super('Spotify');
  }

  when: any = {
    rendered: () => {
      render(<Spotify {...(this.props as SpotifyProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Spotify {...(this.props as SpotifyProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<SpotifyProps>) => {
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
