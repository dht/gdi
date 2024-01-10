import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BoardHeader, BoardHeaderProps } from './BoardHeader';
import { BaseComponentDriver } from 'testing-base';

export class BoardHeaderDriver extends BaseComponentDriver {
    private props: Partial<BoardHeaderProps> = {};

    constructor() {
        super('BoardHeader');
    }

    when: any = {
        rendered: () => {
            render(<BoardHeader {...(this.props as BoardHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BoardHeader {...(this.props as BoardHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BoardHeaderProps>) => {
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
