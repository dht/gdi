import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Content, ContentProps } from './Content';
import { BaseComponentDriver } from 'testing-base';

export class ContentDriver extends BaseComponentDriver {
    private props: Partial<ContentProps> = {};

    constructor() {
        super('Content');
    }

    when: any = {
        rendered: () => {
            render(<Content {...(this.props as ContentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Content {...(this.props as ContentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContentProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
