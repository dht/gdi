import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { YouCompleteMe, YouCompleteMeProps } from './YouCompleteMe';
import { BaseComponentDriver } from 'testing-base';

export class YouCompleteMeDriver extends BaseComponentDriver {
    private props: Partial<YouCompleteMeProps> = {};

    constructor() {
        super('YouCompleteMe');
    }

    when: any = {
        rendered: () => {
            render(<YouCompleteMe {...(this.props as YouCompleteMeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<YouCompleteMe {...(this.props as YouCompleteMeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<YouCompleteMeProps>) => {
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
