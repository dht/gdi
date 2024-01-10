import { render, fireEvent } from '@testing-library/react';
import { Playback, PlaybackProps } from './Playback';
import { BaseComponentDriver } from 'testing-base';

export class PlaybackDriver extends BaseComponentDriver {
  private props: Partial<PlaybackProps> = {};

  constructor() {
    super('Playback');
  }

  when: any = {
    rendered: () => {
      render(<Playback {...(this.props as PlaybackProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<Playback {...(this.props as PlaybackProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<PlaybackProps>) => {
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
