import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GalleryWidgets, GalleryWidgetsProps } from './GalleryWidgets';
import { BaseComponentDriver } from 'testing-base';

export class GalleryWidgetsDriver extends BaseComponentDriver {
    private props: Partial<GalleryWidgetsProps> = {};

    constructor() {
        super('GalleryWidgets');
    }

    when: any = {
        rendered: () => {
            render(<GalleryWidgets {...(this.props as GalleryWidgetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <GalleryWidgets {...(this.props as GalleryWidgetsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<GalleryWidgetsProps>) => {
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
