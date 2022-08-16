import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Multi, MultiProps } from './Multi';
import { BaseComponentDriver } from 'testing-base';

export class MultiDriver extends BaseComponentDriver {
    private props: Partial<MultiProps> = {
    };

    constructor() {
        super('Multi');
    }

    when: any = {
        rendered: () => {
            render(<Multi {...(this.props as MultiProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Multi {...(this.props as MultiProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MultiProps>) => {
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
