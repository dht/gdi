import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionYoutube, VisionYoutubeProps } from './VisionYoutube';
import { BaseComponentDriver } from 'testing-base';

export class VisionYoutubeDriver extends BaseComponentDriver {
    private props: Partial<VisionYoutubeProps> = {};

    constructor() {
        super('VisionYoutube');
    }

    when: any = {
        rendered: () => {
            render(<VisionYoutube {...(this.props as VisionYoutubeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionYoutube {...(this.props as VisionYoutubeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionYoutubeProps>) => {
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
