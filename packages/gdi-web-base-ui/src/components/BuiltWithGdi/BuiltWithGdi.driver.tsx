import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BuiltWithGdi, BuiltWithGdiProps } from './BuiltWithGdi';
import { BaseComponentDriver } from 'testing-base';

export class BuiltWithGdiDriver extends BaseComponentDriver {
    private props: Partial<BuiltWithGdiProps> = {};

    constructor() {
        super('BuiltWithGdi');
    }

    when: any = {
        rendered: () => {
            render(<BuiltWithGdi {...(this.props as BuiltWithGdiProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.Wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BuiltWithGdi {...(this.props as BuiltWithGdiProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BuiltWithGdiProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.Wrapper.className;
        },
        label: () => {
            return this.Wrapper.innerHTML;
        },
    };
}
