import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VoiceGallery, VoiceGalleryProps } from './VoiceGallery';
import { BaseComponentDriver } from 'testing-base';

export class VoiceGalleryDriver extends BaseComponentDriver {
  private props: Partial<VoiceGalleryProps> = {};

  constructor() {
    super('VoiceGallery');
  }

  when: any = {
    rendered: () => {
      render(<VoiceGallery {...(this.props as VoiceGalleryProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<VoiceGallery {...(this.props as VoiceGalleryProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<VoiceGalleryProps>) => {
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
