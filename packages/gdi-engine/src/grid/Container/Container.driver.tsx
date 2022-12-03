import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Wrapper, ContainerProps } from './Container';
import { BaseComponentDriver } from 'testing-base';

export class ContainerDriver extends BaseComponentDriver {
    private props: Partial<WrapperProps> = {};

    constructor() {
        super('Container');
    }

    when: any = {
        rendered: () => {
            render(<Wrapper {...(this.props as ContainerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Wrapper {...(this.props as ContainerProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WrapperProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
