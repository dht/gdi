import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MarkDown, MarkDownProps } from './MarkDown';
import { BaseComponentDriver } from 'testing-base';

export class MarkDownDriver extends BaseComponentDriver {
    private props: Partial<MarkDownProps> = {};

    constructor() {
        super('MarkDown');
    }

    when: any = {
        rendered: () => {
            render(<MarkDown {...(this.props as MarkDownProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MarkDown {...(this.props as MarkDownProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MarkDownProps>) => {
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
