import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Features, FeaturesProps } from './Features';
import { BaseComponentDriver } from 'testing-base';

export class FeaturesDriver extends BaseComponentDriver {
    private props: Partial<FeaturesProps> = {};

    constructor() {
        super('Features');
    }

    when: any = {
        rendered: () => {
            render(<Features {...(this.props as FeaturesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Features {...(this.props as FeaturesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FeaturesProps>) => {
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
