import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tag, TagProps } from './Tag';
import { BaseComponentDriver } from 'testing-base';

export class TagDriver extends BaseComponentDriver {
    private props: Partial<TagProps> = {};

    constructor() {
        super('Tag');
    }

    when: any = {
        rendered: () => {
            render(<Tag {...(this.props as TagProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tag {...(this.props as TagProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TagProps>) => {
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
