import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextAndImage, TextAndImageProps } from './TextAndImage';
import { BaseComponentDriver } from 'testing-base';

export class TextAndImageDriver extends BaseComponentDriver {
    private props: Partial<TextAndImageProps> = {
    };

    constructor() {
        super('TextAndImage');
    }

    when: any = {
        rendered: () => {
            render(<TextAndImage {...(this.props as TextAndImageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TextAndImage {...(this.props as TextAndImageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TextAndImageProps>) => {
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
