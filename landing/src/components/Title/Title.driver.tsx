import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Title, TitleProps } from './Title';
import { BaseComponentDriver } from 'testing-base';

export class TitleDriver extends BaseComponentDriver {
    private props: Partial<TitleProps> = {};

    constructor() {
        super('Title');
    }

    when: any = {
        rendered: () => {
            render(<Title {...(this.props as TitleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Title {...(this.props as TitleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TitleProps>) => {
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
