import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { YourBusiness, YourBusinessProps } from './YourBusiness';
import { BaseComponentDriver } from 'testing-base';

export class YourBusinessDriver extends BaseComponentDriver {
    private props: Partial<YourBusinessProps> = {
    };

    constructor() {
        super('YourBusiness');
    }

    when: any = {
        rendered: () => {
            render(<YourBusiness {...(this.props as YourBusinessProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<YourBusiness {...(this.props as YourBusinessProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<YourBusinessProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
