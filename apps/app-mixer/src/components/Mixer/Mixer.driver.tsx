import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mixer, MixerProps } from './Mixer';
import { BaseComponentDriver } from 'testing-base';

export class MixerDriver extends BaseComponentDriver {
    private props: Partial<MixerProps> = {};

    constructor() {
        super('Mixer');
    }

    when: any = {
        rendered: () => {
            render(<Mixer {...(this.props as MixerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Mixer {...(this.props as MixerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MixerProps>) => {
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
