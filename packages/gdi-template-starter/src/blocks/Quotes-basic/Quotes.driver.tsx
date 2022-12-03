import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Quotes, QuotesProps } from './Quotes';
import { BaseComponentDriver } from 'testing-base';

export class QuotesDriver extends BaseComponentDriver {
    private props: Partial<QuotesProps> = {};

    constructor() {
        super('Quotes');
    }

    when: any = {
        rendered: () => {
            render(<Quotes {...(this.props as QuotesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Quotes {...(this.props as QuotesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<QuotesProps>) => {
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
