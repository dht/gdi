import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CapabilitiesPage, CapabilitiesPageProps } from './CapabilitiesPage';
import { BaseComponentDriver } from 'testing-base';

export class CapabilitiesPageDriver extends BaseComponentDriver {
    private props: Partial<CapabilitiesPageProps> = {};

    constructor() {
        super('CapabilitiesPage');
    }

    when: any = {
        rendered: () => {
            render(<CapabilitiesPage {...(this.props as CapabilitiesPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CapabilitiesPage {...(this.props as CapabilitiesPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CapabilitiesPageProps>) => {
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
