import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OverlayField, OverlayFieldProps } from './OverlayField';
import { BaseComponentDriver } from 'testing-base';

export class OverlayFieldDriver extends BaseComponentDriver {
    private props: Partial<OverlayFieldProps> = {};

    constructor() {
        super('OverlayField');
    }

    when: any = {
        rendered: () => {
            render(<OverlayField {...(this.props as OverlayFieldProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <OverlayField {...(this.props as OverlayFieldProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<OverlayFieldProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
