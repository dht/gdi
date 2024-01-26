import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VideoEffects, VideoEffectsProps } from './VideoEffects';
import { BaseComponentDriver } from 'testing-base';

export class VideoEffectsDriver extends BaseComponentDriver {
    private props: Partial<VideoEffectsProps> = {};

    constructor() {
        super('VideoEffects');
    }

    when: any = {
        rendered: () => {
            render(<VideoEffects {...(this.props as VideoEffectsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VideoEffects {...(this.props as VideoEffectsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VideoEffectsProps>) => {
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
