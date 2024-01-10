import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetPreview, AssetPreviewProps } from './AssetPreview';
import { BaseComponentDriver } from 'testing-base';

export class AssetPreviewDriver extends BaseComponentDriver {
  private props: Partial<AssetPreviewProps> = {};

  constructor() {
    super('AssetPreview');
  }

  when: any = {
    rendered: () => {
      render(<AssetPreview {...(this.props as AssetPreviewProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<AssetPreview {...(this.props as AssetPreviewProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<AssetPreviewProps>) => {
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
