import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MixerVisual, MixerVisualProps } from './MixerVisual';
import { BaseComponentDriver } from 'testing-base';

export class MixerVisualDriver extends BaseComponentDriver {
    private props: Partial<MixerVisualProps> = {};

    constructor() {
        super('MixerVisual');
    }

    when: any = {
        rendered: () => {
            render(<MixerVisual {...(this.props as MixerVisualProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MixerVisual {...(this.props as MixerVisualProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MixerVisualProps>) => {
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
