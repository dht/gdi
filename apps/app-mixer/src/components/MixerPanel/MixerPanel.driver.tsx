import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MixerPanel, MixerPanelProps } from './MixerPanel';
import { BaseComponentDriver } from 'testing-base';

export class MixerPanelDriver extends BaseComponentDriver {
    private props: Partial<MixerPanelProps> = {
    };

    constructor() {
        super('MixerPanel');
    }

    when: any = {
        rendered: () => {
            render(<MixerPanel {...(this.props as MixerPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MixerPanel {...(this.props as MixerPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MixerPanelProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
