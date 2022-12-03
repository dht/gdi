import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TagsInput, TagsInputProps } from './TagsInput';
import { BaseComponentDriver } from 'testing-base';

export class TagsInputDriver extends BaseComponentDriver {
    private props: Partial<TagsInputProps> = {};

    constructor() {
        super('TagsInput');
    }

    when: any = {
        rendered: () => {
            render(<TagsInput {...(this.props as TagsInputProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TagsInputProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
