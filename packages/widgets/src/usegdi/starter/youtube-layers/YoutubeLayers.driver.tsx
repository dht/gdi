import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { YoutubeLayers, YoutubeLayersProps } from './YoutubeLayers';
import { BaseComponentDriver } from 'testing-base';

export class YoutubeLayersDriver extends BaseComponentDriver {
    private props: Partial<YoutubeLayersProps> = {};

    constructor() {
        super('YoutubeLayers');
    }

    when: any = {
        rendered: () => {
            render(<YoutubeLayers {...(this.props as YoutubeLayersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<YoutubeLayers {...(this.props as YoutubeLayersProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<YoutubeLayersProps>) => {
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
