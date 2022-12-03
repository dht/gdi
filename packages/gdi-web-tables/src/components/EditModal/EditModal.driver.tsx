import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditModal, EditModalProps } from './EditModal';
import { BaseComponentDriver } from 'testing-base';

export class EditModalDriver extends BaseComponentDriver {
    private props: Partial<EditModalProps> = {};

    constructor() {
        super('EditModal');
    }

    when: any = {
        rendered: () => {
            render(<EditModal {...(this.props as EditModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <EditModal {...(this.props as EditModalProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<EditModalProps>) => {
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
