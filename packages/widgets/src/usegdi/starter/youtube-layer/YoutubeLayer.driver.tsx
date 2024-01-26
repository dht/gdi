import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { YoutubeLayer, YoutubeLayerProps } from './YoutubeLayer';
import { BaseComponentDriver } from 'testing-base';

export class YoutubeLayerDriver extends BaseComponentDriver {
    private props: Partial<YoutubeLayerProps> = {};

    constructor() {
        super('YoutubeLayer');
    }

    when: any = {
        rendered: () => {
            render(<YoutubeLayer {...(this.props as YoutubeLayerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<YoutubeLayer {...(this.props as YoutubeLayerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<YoutubeLayerProps>) => {
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
