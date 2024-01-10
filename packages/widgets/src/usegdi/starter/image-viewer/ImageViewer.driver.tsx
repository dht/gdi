import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageViewer, ImageViewerProps } from './ImageViewer';
import { BaseComponentDriver } from 'testing-base';

export class ImageViewerDriver extends BaseComponentDriver {
  private props: Partial<ImageViewerProps> = {};

  constructor() {
    super('ImageViewer');
  }

  when: any = {
    rendered: () => {
      render(<ImageViewer {...(this.props as ImageViewerProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<ImageViewer {...(this.props as ImageViewerProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<ImageViewerProps>) => {
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
