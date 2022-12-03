import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PhotoBooth, PhotoBoothProps } from './PhotoBooth';
import { BaseComponentDriver } from 'testing-base';

export class PhotoBoothDriver extends BaseComponentDriver {
    private props: Partial<PhotoBoothProps> = {};

    constructor() {
        super('PhotoBooth');
    }

    when: any = {
        rendered: () => {
            render(<PhotoBooth {...(this.props as PhotoBoothProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PhotoBooth {...(this.props as PhotoBoothProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PhotoBoothProps>) => {
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
