import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BoardsPage, BoardsPageProps } from './BoardsPage';
import { BaseComponentDriver } from 'testing-base';

export class BoardsPageDriver extends BaseComponentDriver {
    private props: Partial<BoardsPageProps> = {};

    constructor() {
        super('BoardsPage');
    }

    when: any = {
        rendered: () => {
            render(<BoardsPage {...(this.props as BoardsPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BoardsPage {...(this.props as BoardsPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BoardsPageProps>) => {
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
