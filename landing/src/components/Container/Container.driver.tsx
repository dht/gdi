import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Container, ContainerProps } from './Container';
import { BaseComponentDriver } from 'testing-base';

export class ContainerDriver extends BaseComponentDriver {
    private props: Partial<ContainerProps> = {};

    constructor() {
        super('Container');
    }

    when: any = {
        rendered: () => {
            render(<Container {...(this.props as ContainerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Container {...(this.props as ContainerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContainerProps>) => {
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
