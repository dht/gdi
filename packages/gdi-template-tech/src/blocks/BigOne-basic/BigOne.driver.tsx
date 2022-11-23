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
            fireEvent.click(this.container);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
