import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlowsPage, FlowsPageProps } from './FlowsPage';
import { BaseComponentDriver } from 'testing-base';

export class FlowsPageDriver extends BaseComponentDriver {
    private props: Partial<FlowsPageProps> = {};

    constructor() {
        super('FlowsPage');
    }

    when: any = {
        rendered: () => {
            render(<FlowsPage {...(this.props as FlowsPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlowsPage {...(this.props as FlowsPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlowsPageProps>) => {
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
