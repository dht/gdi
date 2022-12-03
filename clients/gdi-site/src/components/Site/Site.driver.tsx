import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Site, SiteProps } from './Site';
import { BaseComponentDriver } from 'testing-base';

export class SiteDriver extends BaseComponentDriver {
    private props: Partial<SiteProps> = {};

    constructor() {
        super('Site');
    }

    when: any = {
        rendered: () => {
            render(<Site {...(this.props as SiteProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Site {...(this.props as SiteProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SiteProps>) => {
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
