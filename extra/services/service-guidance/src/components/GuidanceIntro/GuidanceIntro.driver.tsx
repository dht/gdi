import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GuidanceIntro, GuidanceIntroProps } from './GuidanceIntro';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceIntroDriver extends BaseComponentDriver {
    private props: Partial<GuidanceIntroProps> = {};

    constructor() {
        super('GuidanceIntro');
    }

    when: any = {
        rendered: () => {
            render(<GuidanceIntro {...(this.props as GuidanceIntroProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GuidanceIntro {...(this.props as GuidanceIntroProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceIntroProps>) => {
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
