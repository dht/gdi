import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxBoards, MuxBoardsProps } from './MuxBoards';
import { BaseComponentDriver } from 'testing-base';

export class MuxBoardsDriver extends BaseComponentDriver {
    private props: Partial<MuxBoardsProps> = {};

    constructor() {
        super('MuxBoards');
    }

    when: any = {
        rendered: () => {
            render(<MuxBoards {...(this.props as MuxBoardsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxBoards {...(this.props as MuxBoardsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxBoardsProps>) => {
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
