import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sort, SortProps } from './Sort';
import { BaseComponentDriver } from 'testing-base';

export class SortDriver extends BaseComponentDriver {
    private props: Partial<SortProps> = {};

    constructor() {
        super('Sort');
    }

    when: any = {
        rendered: () => {
            render(<Sort {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SortProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
