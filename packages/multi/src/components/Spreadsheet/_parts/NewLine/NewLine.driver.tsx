import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewLine, NewLineProps } from './NewLine';
import { BaseComponentDriver } from 'testing-base';

export class NewLineDriver extends BaseComponentDriver {
    private props: Partial<NewLineProps> = {};

    constructor() {
        super('NewLine');
    }

    when: any = {
        rendered: () => {
            render(<NewLine {...(this.props as NewLineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<NewLine {...(this.props as NewLineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<NewLineProps>) => {
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
