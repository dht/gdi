import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GdiIntro, GdiIntroProps } from './GdiIntro';
import { BaseComponentDriver } from 'testing-base';

export class GdiIntroDriver extends BaseComponentDriver {
    private props: Partial<GdiIntroProps> = {};

    constructor() {
        super('GdiIntro');
    }

    when: any = {
        rendered: () => {
            render(<GdiIntro {...(this.props as GdiIntroProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GdiIntro {...(this.props as GdiIntroProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GdiIntroProps>) => {
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
