import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GridModal, GridModalProps } from './GridModal';
import { BaseComponentDriver } from 'testing-base';

export class GridModalDriver extends BaseComponentDriver {
    private props: Partial<GridModalProps> = {};

    constructor() {
        super('GridModal');
    }

    when: any = {
        rendered: () => {
            render(<GridModal {...(this.props as GridModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GridModal {...(this.props as GridModalProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GridModalProps>) => {
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
