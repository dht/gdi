import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemProject, ItemProjectProps } from './ItemProject';
import { BaseComponentDriver } from 'testing-base';

export class ItemProjectDriver extends BaseComponentDriver {
    private props: Partial<ItemProjectProps> = {};

    constructor() {
        super('ItemProject');
    }

    when: any = {
        rendered: () => {
            render(<ItemProject {...(this.props as ItemProjectProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemProject {...(this.props as ItemProjectProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemProjectProps>) => {
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
