import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageSuggestion, ImageSuggestionProps } from './ImageSuggestion';
import { BaseComponentDriver } from 'testing-base';

export class ImageSuggestionDriver extends BaseComponentDriver {
    private props: Partial<ImageSuggestionProps> = {};

    constructor() {
        super('ImageSuggestion');
    }

    when: any = {
        rendered: () => {
            render(<ImageSuggestion {...(this.props as ImageSuggestionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImageSuggestion {...(this.props as ImageSuggestionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImageSuggestionProps>) => {
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
