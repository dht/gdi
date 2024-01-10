import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileHeader, MobileHeaderProps } from './MobileHeader';
import { BaseComponentDriver } from 'testing-base';

export class MobileHeaderDriver extends BaseComponentDriver {
    private props: Partial<MobileHeaderProps> = {};

    constructor() {
        super('MobileHeader');
    }

    when: any = {
        rendered: () => {
            render(<MobileHeader {...(this.props as MobileHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MobileHeader {...(this.props as MobileHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MobileHeaderProps>) => {
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
