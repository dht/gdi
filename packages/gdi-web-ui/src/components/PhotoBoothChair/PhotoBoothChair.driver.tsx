import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PhotoBoothChair, PhotoBoothChairProps } from './PhotoBoothChair';
import { BaseComponentDriver } from 'testing-base';

export class PhotoBoothChairDriver extends BaseComponentDriver {
    private props: Partial<PhotoBoothChairProps> = {};

    constructor() {
        super('PhotoBoothChair');
    }

    when: any = {
        rendered: () => {
            render(
                <PhotoBoothChair {...(this.props as PhotoBoothChairProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PhotoBoothChair {...(this.props as PhotoBoothChairProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PhotoBoothChairProps>) => {
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
