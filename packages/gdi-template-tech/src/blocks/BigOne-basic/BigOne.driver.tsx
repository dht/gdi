import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BigOne, BigOneProps } from './BigOne';
import { BaseComponentDriver } from 'testing-base';

export class BigOneDriver extends BaseComponentDriver {
    private props: Partial<BigOneProps> = {
    };

    constructor() {
        super('BigOne');
    }

    when: any = {
        rendered: () => {
            render(<BigOne {...(this.props as BigOneProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BigOne {...(this.props as BigOneProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BigOneProps>) => {
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
