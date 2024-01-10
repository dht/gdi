import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CameraPosition, CameraPositionProps } from './CameraPosition';
import { BaseComponentDriver } from 'testing-base';

export class CameraPositionDriver extends BaseComponentDriver {
    private props: Partial<CameraPositionProps> = {};

    constructor() {
        super('CameraPosition');
    }

    when: any = {
        rendered: () => {
            render(<CameraPosition {...(this.props as CameraPositionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CameraPosition {...(this.props as CameraPositionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CameraPositionProps>) => {
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
