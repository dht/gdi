import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AssetsPage, AssetsPageProps } from './AssetsPage';
import { BaseComponentDriver } from 'testing-base';

export class AssetsPageDriver extends BaseComponentDriver {
    private props: Partial<AssetsPageProps> = {};

    constructor() {
        super('AssetsPage');
    }

    when: any = {
        rendered: () => {
            render(<AssetsPage {...(this.props as AssetsPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AssetsPage {...(this.props as AssetsPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AssetsPageProps>) => {
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
