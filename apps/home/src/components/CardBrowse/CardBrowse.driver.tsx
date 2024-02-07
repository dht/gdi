import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CardBrowse, CardBrowseProps } from './CardBrowse';
import { BaseComponentDriver } from 'testing-base';

export class CardBrowseDriver extends BaseComponentDriver {
    private props: Partial<CardBrowseProps> = {};

    constructor() {
        super('CardBrowse');
    }

    when: any = {
        rendered: () => {
            render(<CardBrowse {...(this.props as CardBrowseProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CardBrowse {...(this.props as CardBrowseProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CardBrowseProps>) => {
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
