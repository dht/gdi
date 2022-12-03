import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MixerTree, MixerTreeProps } from './MixerTree';
import { BaseComponentDriver } from 'testing-base';

export class MixerTreeDriver extends BaseComponentDriver {
    private props: Partial<MixerTreeProps> = {};

    constructor() {
        super('MixerTree');
    }

    when: any = {
        rendered: () => {
            render(<MixerTree {...(this.props as MixerTreeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MixerTree {...(this.props as MixerTreeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MixerTreeProps>) => {
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
