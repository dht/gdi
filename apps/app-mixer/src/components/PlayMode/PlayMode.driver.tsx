import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PlayMode, PlayModeProps } from './PlayMode';
import { BaseComponentDriver } from 'testing-base';

export class PlayModeDriver extends BaseComponentDriver {
    private props: Partial<PlayModeProps> = {};

    constructor() {
        super('PlayMode');
    }

    when: any = {
        rendered: () => {
            render(<PlayMode {...(this.props as PlayModeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PlayMode {...(this.props as PlayModeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PlayModeProps>) => {
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
