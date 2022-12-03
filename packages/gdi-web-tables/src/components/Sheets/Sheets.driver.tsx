import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sheets, SheetsProps } from './Sheets';
import { BaseComponentDriver } from 'testing-base';

export class SheetsDriver extends BaseComponentDriver {
    private props: Partial<SheetsProps> = {};

    constructor() {
        super('Sheets');
    }

    when: any = {
        rendered: () => {
            render(<Sheets {...(this.props as SheetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Sheets {...(this.props as SheetsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SheetsProps>) => {
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
