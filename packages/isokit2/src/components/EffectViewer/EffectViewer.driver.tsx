import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EffectViewer, EffectViewerProps } from './EffectViewer';
import { BaseComponentDriver } from 'testing-base';

export class EffectViewerDriver extends BaseComponentDriver {
    private props: Partial<EffectViewerProps> = {};

    constructor() {
        super('EffectViewer');
    }

    when: any = {
        rendered: () => {
            render(<EffectViewer {...(this.props as EffectViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<EffectViewer {...(this.props as EffectViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EffectViewerProps>) => {
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
