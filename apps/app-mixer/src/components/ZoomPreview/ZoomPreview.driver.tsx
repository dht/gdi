import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ZoomPreview, ZoomPreviewProps } from './ZoomPreview';
import { BaseComponentDriver } from 'testing-base';

export class ZoomPreviewDriver extends BaseComponentDriver {
    private props: Partial<ZoomPreviewProps> = {
    };

    constructor() {
        super('ZoomPreview');
    }

    when: any = {
        rendered: () => {
            render(<ZoomPreview {...(this.props as ZoomPreviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ZoomPreview {...(this.props as ZoomPreviewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ZoomPreviewProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
