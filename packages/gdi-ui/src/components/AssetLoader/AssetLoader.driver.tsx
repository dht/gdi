import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetLoader, AssetLoaderProps } from './AssetLoader';
import { BaseComponentDriver } from 'testing-base';

export class AssetLoaderDriver extends BaseComponentDriver {
    private props: Partial<AssetLoaderProps> = {};

    constructor() {
        super('AssetLoader');
    }

    when: any = {
        rendered: () => {
            render(<AssetLoader {...(this.props as AssetLoaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AssetLoader {...(this.props as AssetLoaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AssetLoaderProps>) => {
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
