import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SaveBoard, SaveBoardProps } from './SaveBoard';
import { BaseComponentDriver } from 'testing-base';

export class SaveBoardDriver extends BaseComponentDriver {
    private props: Partial<SaveBoardProps> = {};

    constructor() {
        super('SaveBoard');
    }

    when: any = {
        rendered: () => {
            render(<SaveBoard {...(this.props as SaveBoardProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SaveBoard {...(this.props as SaveBoardProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SaveBoardProps>) => {
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
