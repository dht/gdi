import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VideoLibrary, VideoLibraryProps } from './VideoLibrary';
import { BaseComponentDriver } from 'testing-base';

export class VideoLibraryDriver extends BaseComponentDriver {
    private props: Partial<VideoLibraryProps> = {};

    constructor() {
        super('VideoLibrary');
    }

    when: any = {
        rendered: () => {
            render(<VideoLibrary {...(this.props as VideoLibraryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VideoLibrary {...(this.props as VideoLibraryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VideoLibraryProps>) => {
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
