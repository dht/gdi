import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyValue, KeyValueProps } from './KeyValue';
import { BaseComponentDriver } from 'testing-base';

export class KeyValueDriver extends BaseComponentDriver {
    private props: Partial<KeyValueProps> = {};

    constructor() {
        super('KeyValue');
    }

    when: any = {
        rendered: () => {
            render(<KeyValue {...(this.props as KeyValueProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <KeyValue {...(this.props as KeyValueProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<KeyValueProps>) => {
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
