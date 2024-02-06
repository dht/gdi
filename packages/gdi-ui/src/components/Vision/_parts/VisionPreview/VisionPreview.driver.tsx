import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionPreview, VisionPreviewProps } from './VisionPreview';
import { BaseComponentDriver } from 'testing-base';

export class VisionPreviewDriver extends BaseComponentDriver {
    private props: Partial<VisionPreviewProps> = {};

    constructor() {
        super('VisionPreview');
    }

    when: any = {
        rendered: () => {
            render(<VisionPreview {...(this.props as VisionPreviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionPreview {...(this.props as VisionPreviewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionPreviewProps>) => {
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
