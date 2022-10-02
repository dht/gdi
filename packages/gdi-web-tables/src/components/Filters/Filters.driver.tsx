import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Filters, FiltersProps } from './Filters';
import { BaseComponentDriver } from 'testing-base';

export class FiltersDriver extends BaseComponentDriver {
    private props: Partial<FiltersProps> = {
    };

    constructor() {
        super('Filters');
    }

    when: any = {
        rendered: () => {
            render(<Filters {...(this.props as FiltersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Filters {...(this.props as FiltersProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FiltersProps>) => {
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
