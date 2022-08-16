import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tags, TagsProps } from './Tags';
import { BaseComponentDriver } from 'testing-base';

export class TagsDriver extends BaseComponentDriver {
    private props: Partial<TagsProps> = {
    };

    constructor() {
        super('Tags');
    }

    when: any = {
        rendered: () => {
            render(<Tags {...(this.props as TagsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tags {...(this.props as TagsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TagsProps>) => {
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
