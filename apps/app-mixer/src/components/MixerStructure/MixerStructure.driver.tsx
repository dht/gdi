import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MixerStructure, MixerStructureProps } from './MixerStructure';
import { BaseComponentDriver } from 'testing-base';

export class MixerStructureDriver extends BaseComponentDriver {
    private props: Partial<MixerStructureProps> = {};

    constructor() {
        super('MixerStructure');
    }

    when: any = {
        rendered: () => {
            render(<MixerStructure {...(this.props as MixerStructureProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MixerStructure {...(this.props as MixerStructureProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MixerStructureProps>) => {
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
