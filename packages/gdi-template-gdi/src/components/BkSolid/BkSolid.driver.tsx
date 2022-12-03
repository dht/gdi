import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BkSolid, BkSolidProps } from './BkSolid';
import { BaseComponentDriver } from 'testing-base';

export class BkSolidDriver extends BaseComponentDriver {
    private props: Partial<BkSolidProps> = {};

    constructor() {
        super('BkSolid');
    }

    when: any = {
        rendered: () => {
            render(<BkSolid {...(this.props as BkSolidProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BkSolid {...(this.props as BkSolidProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BkSolidProps>) => {
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
