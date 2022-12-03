import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddModal, AddModalProps } from './AddModal';
import { BaseComponentDriver } from 'testing-base';

export class AddModalDriver extends BaseComponentDriver {
    private props: Partial<AddModalProps> = {};

    constructor() {
        super('AddModal');
    }

    when: any = {
        rendered: () => {
            render(<AddModal {...(this.props as AddModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <AddModal {...(this.props as AddModalProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<AddModalProps>) => {
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
