import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HashTags, HashTagsProps } from './HashTags';
import { BaseComponentDriver } from 'testing-base';

export class HashTagsDriver extends BaseComponentDriver {
    private props: Partial<HashTagsProps> = {};

    constructor() {
        super('HashTags');
    }

    when: any = {
        rendered: () => {
            render(<HashTags {...(this.props as HashTagsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <HashTags {...(this.props as HashTagsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<HashTagsProps>) => {
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
