import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageOverlay, ImageOverlayProps } from './ImageOverlay';
import { BaseComponentDriver } from 'testing-base';

export class ImageOverlayDriver extends BaseComponentDriver {
    private props: Partial<ImageOverlayProps> = {
    };

    constructor() {
        super('ImageOverlay');
    }

    when: any = {
        rendered: () => {
            render(<ImageOverlay {...(this.props as ImageOverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImageOverlay {...(this.props as ImageOverlayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImageOverlayProps>) => {
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
