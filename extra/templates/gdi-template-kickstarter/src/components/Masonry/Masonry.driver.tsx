import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Masonry, MasonryProps } from './Masonry';
import { BaseComponentDriver } from 'testing-base';

export class MasonryDriver extends BaseComponentDriver {
    private props: Partial<MasonryProps> = {};

    constructor() {
        super('Masonry');
    }

    when: any = {
        rendered: () => {
            render(<Masonry {...(this.props as MasonryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Masonry {...(this.props as MasonryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MasonryProps>) => {
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
