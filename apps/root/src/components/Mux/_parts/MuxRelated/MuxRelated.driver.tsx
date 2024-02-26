import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxRelated, MuxRelatedProps } from './MuxRelated';
import { BaseComponentDriver } from 'testing-base';

export class MuxRelatedDriver extends BaseComponentDriver {
    private props: Partial<MuxRelatedProps> = {};

    constructor() {
        super('MuxRelated');
    }

    when: any = {
        rendered: () => {
            render(<MuxRelated {...(this.props as MuxRelatedProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxRelated {...(this.props as MuxRelatedProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxRelatedProps>) => {
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
