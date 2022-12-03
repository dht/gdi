import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SortableList, SortableListProps } from './SortableList';
import { BaseComponentDriver } from 'testing-base';

export class SortableListDriver extends BaseComponentDriver {
    private props: Partial<SortableListProps> = {};

    constructor() {
        super('SortableList');
    }

    when: any = {
        rendered: () => {
            render(<SortableList {...(this.props as SortableListProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SortableList {...(this.props as SortableListProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SortableListProps>) => {
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
