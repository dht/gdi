import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetNew, AssetNewProps } from './AssetNew';
import { BaseComponentDriver } from 'testing-base';

export class AssetNewDriver extends BaseComponentDriver {
    private props: Partial<AssetNewProps> = {};

    constructor() {
        super('AssetNew');
    }

    when: any = {
        rendered: () => {
            render(<AssetNew {...(this.props as AssetNewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AssetNew {...(this.props as AssetNewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AssetNewProps>) => {
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
