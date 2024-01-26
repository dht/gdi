import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VideoThumbs, VideoThumbsProps } from './VideoThumbs';
import { BaseComponentDriver } from 'testing-base';

export class VideoThumbsDriver extends BaseComponentDriver {
    private props: Partial<VideoThumbsProps> = {};

    constructor() {
        super('VideoThumbs');
    }

    when: any = {
        rendered: () => {
            render(<VideoThumbs {...(this.props as VideoThumbsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VideoThumbs {...(this.props as VideoThumbsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VideoThumbsProps>) => {
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
