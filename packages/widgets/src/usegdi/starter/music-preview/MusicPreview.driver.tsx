import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MusicPreview, MusicPreviewProps } from './MusicPreview';
import { BaseComponentDriver } from 'testing-base';

export class MusicPreviewDriver extends BaseComponentDriver {
    private props: Partial<MusicPreviewProps> = {};

    constructor() {
        super('MusicPreview');
    }

    when: any = {
        rendered: () => {
            render(<MusicPreview {...(this.props as MusicPreviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MusicPreview {...(this.props as MusicPreviewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MusicPreviewProps>) => {
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
