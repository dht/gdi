import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WidgetGallery, WidgetGalleryProps } from './WidgetGallery';
import { BaseComponentDriver } from 'testing-base';

export class WidgetGalleryDriver extends BaseComponentDriver {
    private props: Partial<WidgetGalleryProps> = {};

    constructor() {
        super('WidgetGallery');
    }

    when: any = {
        rendered: () => {
            render(<WidgetGallery {...(this.props as WidgetGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <WidgetGallery {...(this.props as WidgetGalleryProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WidgetGalleryProps>) => {
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
