import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemComment, ItemCommentProps } from './ItemComment';
import { BaseComponentDriver } from 'testing-base';

export class ItemCommentDriver extends BaseComponentDriver {
    private props: Partial<ItemCommentProps> = {
    };

    constructor() {
        super('ItemComment');
    }

    when: any = {
        rendered: () => {
            render(<ItemComment {...(this.props as ItemCommentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemComment {...(this.props as ItemCommentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemCommentProps>) => {
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
