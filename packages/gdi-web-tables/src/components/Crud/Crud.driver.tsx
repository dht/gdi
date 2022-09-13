import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Crud } from './Crud';
import { BaseComponentDriver } from 'testing-base';
import { CrudProps } from './Crud.context';

export class CrudDriver extends BaseComponentDriver {
    private props: Partial<CrudProps> = {};

    constructor() {
        super('Crud');
    }

    when: any = {
        rendered: () => {
            render(<Crud {...(this.props as CrudProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Crud {...(this.props as CrudProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CrudProps>) => {
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
