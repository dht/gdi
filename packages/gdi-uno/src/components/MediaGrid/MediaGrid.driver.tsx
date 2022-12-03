import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MediaGrid, MediaGridProps } from './MediaGrid';
import { BaseComponentDriver } from 'testing-base';

export class MediaGridDriver extends BaseComponentDriver {
    private props: Partial<MediaGridProps> = {};

    constructor() {
        super('MediaGrid');
    }

    when: any = {
        rendered: () => {
            render(<MediaGrid {...(this.props as MediaGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MediaGrid {...(this.props as MediaGridProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MediaGridProps>) => {
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
