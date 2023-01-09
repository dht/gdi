import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Blkr, BlkrProps } from './Blkr';
import { BaseComponentDriver } from 'testing-base';

export class BlkrDriver extends BaseComponentDriver {
    private props: Partial<BlkrProps> = {};

    constructor() {
        super('Blkr');
    }

    when: any = {
        rendered: () => {
            render(<Blkr {...(this.props as BlkrProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Blkr {...(this.props as BlkrProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlkrProps>) => {
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
