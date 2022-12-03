import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Media, MediaProps } from './Media';
import { BaseComponentDriver } from 'testing-base';

export class MediaDriver extends BaseComponentDriver {
    private props: Partial<MediaProps> = {};

    constructor() {
        super('Media');
    }

    when: any = {
        rendered: () => {
            render(<Media {...(this.props as MediaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Media {...(this.props as MediaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MediaProps>) => {
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
