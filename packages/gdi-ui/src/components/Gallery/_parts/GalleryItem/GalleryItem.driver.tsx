import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GalleryItem, GalleryItemProps } from './GalleryItem';
import { BaseComponentDriver } from 'testing-base';

export class GalleryItemDriver extends BaseComponentDriver {
  private props: Partial<GalleryItemProps> = {};

  constructor() {
    super('GalleryItem');
  }

  when: any = {
    rendered: () => {
      render(<GalleryItem {...(this.props as GalleryItemProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<GalleryItem {...(this.props as GalleryItemProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<GalleryItemProps>) => {
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
