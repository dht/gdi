import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CornerTriangle, CornerTriangleProps } from './CornerTriangle';
import { BaseComponentDriver } from 'testing-base';

export class CornerTriangleDriver extends BaseComponentDriver {
    private props: Partial<CornerTriangleProps> = {};

    constructor() {
        super('CornerTriangle');
    }

    when: any = {
        rendered: () => {
            render(<CornerTriangle {...(this.props as CornerTriangleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <CornerTriangle {...(this.props as CornerTriangleProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CornerTriangleProps>) => {
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
