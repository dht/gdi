import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetBottom, AssetBottomProps } from './AssetBottom';
import { BaseComponentDriver } from 'testing-base';

export class AssetBottomDriver extends BaseComponentDriver {
    private props: Partial<AssetBottomProps> = {};

    constructor() {
        super('AssetBottom');
    }

    when: any = {
        rendered: () => {
            render(<AssetBottom {...(this.props as AssetBottomProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AssetBottom {...(this.props as AssetBottomProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AssetBottomProps>) => {
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
