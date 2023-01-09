import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonCta, ButtonCtaProps } from './ButtonCta';
import { BaseComponentDriver } from 'testing-base';

export class ButtonCtaDriver extends BaseComponentDriver {
    private props: Partial<ButtonCtaProps> = {};

    constructor() {
        super('ButtonCta');
    }

    when: any = {
        rendered: () => {
            render(<ButtonCta {...(this.props as ButtonCtaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ButtonCta {...(this.props as ButtonCtaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ButtonCtaProps>) => {
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
