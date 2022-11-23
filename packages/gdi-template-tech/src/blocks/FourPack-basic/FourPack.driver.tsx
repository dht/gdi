import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FourPack, FourPackProps } from './FourPack';
import { BaseComponentDriver } from 'testing-base';

export class FourPackDriver extends BaseComponentDriver {
    private props: Partial<FourPackProps> = {
    };

    constructor() {
        super('FourPack');
    }

    when: any = {
        rendered: () => {
            render(<FourPack {...(this.props as FourPackProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FourPack {...(this.props as FourPackProps)} />);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
