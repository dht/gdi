import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetList, AssetListProps } from './AssetList';
import { BaseComponentDriver } from 'testing-base';

export class AssetListDriver extends BaseComponentDriver {
  private props: Partial<AssetListProps> = {};

  constructor() {
    super('AssetList');
  }

  when: any = {
    rendered: () => {
      render(<AssetList {...(this.props as AssetListProps)} />);
      return this;
    },
    clicked: () => {
      fireEvent.click(this.wrapper);
      return this;
    },
    snapshot: () => {
      return this.snapshot(<AssetList {...(this.props as AssetListProps)} />);
    },
  };

  given: any = {
    props: (props: Partial<AssetListProps>) => {
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
