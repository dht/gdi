import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxMessageAuthor, MuxMessageAuthorProps } from './MuxMessageAuthor';
import { BaseComponentDriver } from 'testing-base';

export class MuxMessageAuthorDriver extends BaseComponentDriver {
    private props: Partial<MuxMessageAuthorProps> = {};

    constructor() {
        super('MuxMessageAuthor');
    }

    when: any = {
        rendered: () => {
            render(<MuxMessageAuthor {...(this.props as MuxMessageAuthorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxMessageAuthor {...(this.props as MuxMessageAuthorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxMessageAuthorProps>) => {
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
