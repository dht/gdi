import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Creatable, CreatableProps } from './Creatable';
import { BaseComponentDriver } from 'testing-base';

export class CreatableDriver extends BaseComponentDriver {
    private props: Partial<CreatableProps> = {};

    constructor() {
        super('Creatable');
    }

    when: any = {
        rendered: () => {
            render(<Creatable {...(this.props as CreatableProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Creatable {...(this.props as CreatableProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CreatableProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
