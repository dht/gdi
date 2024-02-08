import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DidYouKnow, DidYouKnowProps } from './DidYouKnow';
import { BaseComponentDriver } from 'testing-base';

export class DidYouKnowDriver extends BaseComponentDriver {
    private props: Partial<DidYouKnowProps> = {};

    constructor() {
        super('DidYouKnow');
    }

    when: any = {
        rendered: () => {
            render(<DidYouKnow {...(this.props as DidYouKnowProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DidYouKnow {...(this.props as DidYouKnowProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DidYouKnowProps>) => {
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
