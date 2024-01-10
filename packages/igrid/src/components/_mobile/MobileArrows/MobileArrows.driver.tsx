import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileArrows, MobileArrowsProps } from './MobileArrows';
import { BaseComponentDriver } from 'testing-base';

export class MobileArrowsDriver extends BaseComponentDriver {
    private props: Partial<MobileArrowsProps> = {};

    constructor() {
        super('MobileArrows');
    }

    when: any = {
        rendered: () => {
            render(<MobileArrows {...(this.props as MobileArrowsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MobileArrows {...(this.props as MobileArrowsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MobileArrowsProps>) => {
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
