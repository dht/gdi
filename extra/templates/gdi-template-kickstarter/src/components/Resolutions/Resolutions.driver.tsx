import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Resolutions, ResolutionsProps } from './Resolutions';
import { BaseComponentDriver } from 'testing-base';

export class ResolutionsDriver extends BaseComponentDriver {
    private props: Partial<ResolutionsProps> = {};

    constructor() {
        super('Resolutions');
    }

    when: any = {
        rendered: () => {
            render(<Resolutions {...(this.props as ResolutionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Resolutions {...(this.props as ResolutionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ResolutionsProps>) => {
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
