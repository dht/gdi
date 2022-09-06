import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layouts, LayoutsProps } from './Layouts';
import { BaseComponentDriver } from 'testing-base';

export class LayoutsDriver extends BaseComponentDriver {
    private props: Partial<LayoutsProps> = {};

    constructor() {
        super('Layouts');
    }

    when: any = {
        rendered: () => {
            render(<Layouts {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LayoutsProps>) => {
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
