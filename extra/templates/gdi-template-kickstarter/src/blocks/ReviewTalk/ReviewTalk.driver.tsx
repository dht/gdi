import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewTalk, ReviewTalkProps } from './ReviewTalk';
import { BaseComponentDriver } from 'testing-base';

export class ReviewTalkDriver extends BaseComponentDriver {
    private props: Partial<ReviewTalkProps> = {};

    constructor() {
        super('ReviewTalk');
    }

    when: any = {
        rendered: () => {
            render(<ReviewTalk {...(this.props as ReviewTalkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ReviewTalk {...(this.props as ReviewTalkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ReviewTalkProps>) => {
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
