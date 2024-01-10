import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MakeKeyframe, MakeKeyframeProps } from './MakeKeyframe';
import { BaseComponentDriver } from 'testing-base';

export class MakeKeyframeDriver extends BaseComponentDriver {
    private props: Partial<MakeKeyframeProps> = {};

    constructor() {
        super('MakeKeyframe');
    }

    when: any = {
        rendered: () => {
            render(<MakeKeyframe {...(this.props as MakeKeyframeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MakeKeyframe {...(this.props as MakeKeyframeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MakeKeyframeProps>) => {
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
