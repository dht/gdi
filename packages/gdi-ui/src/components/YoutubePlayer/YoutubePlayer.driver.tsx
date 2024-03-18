import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { YoutubePlayer, YoutubePlayerProps } from './YoutubePlayer';
import { BaseComponentDriver } from 'testing-base';

export class YoutubePlayerDriver extends BaseComponentDriver {
    private props: Partial<YoutubePlayerProps> = {};

    constructor() {
        super('YoutubePlayer');
    }

    when: any = {
        rendered: () => {
            render(<YoutubePlayer {...(this.props as YoutubePlayerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<YoutubePlayer {...(this.props as YoutubePlayerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<YoutubePlayerProps>) => {
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
