import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FourPack, FourPackProps } from './FourPack';
import { BaseComponentDriver } from 'testing-base';

export class FourPackDriver extends BaseComponentDriver {
    private props: Partial<FourPackProps> = {};

    constructor() {
        super('FourPack');
    }

    when: any = {
        rendered: () => {
            render(<FourPack {...(this.props as FourPackProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <FourPack {...(this.props as FourPackProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<FourPackProps>) => {
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
