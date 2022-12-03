import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Poe, PoeProps } from './Poe';
import { BaseComponentDriver } from 'testing-base';

export class PoeDriver extends BaseComponentDriver {
    private props: Partial<PoeProps> = {};

    constructor() {
        super('Poe');
    }

    when: any = {
        rendered: () => {
            render(<Poe {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<PoeProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
