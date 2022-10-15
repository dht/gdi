import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TypeView, TypeViewProps } from './TypeView';
import { BaseComponentDriver } from 'testing-base';

export class TypeViewDriver extends BaseComponentDriver {
    private props: Partial<TypeViewProps> = {
    };

    constructor() {
        super('TypeView');
    }

    when: any = {
        rendered: () => {
            render(<TypeView {...(this.props as TypeViewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TypeView {...(this.props as TypeViewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TypeViewProps>) => {
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
