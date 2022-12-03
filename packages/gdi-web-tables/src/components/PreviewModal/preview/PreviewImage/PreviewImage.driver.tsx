import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewImage, PreviewImageProps } from './PreviewImage';
import { BaseComponentDriver } from 'testing-base';

export class PreviewImageDriver extends BaseComponentDriver {
    private props: Partial<PreviewImageProps> = {};

    constructor() {
        super('PreviewImage');
    }

    when: any = {
        rendered: () => {
            render(<PreviewImage {...(this.props as PreviewImageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewImage {...(this.props as PreviewImageProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewImageProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
