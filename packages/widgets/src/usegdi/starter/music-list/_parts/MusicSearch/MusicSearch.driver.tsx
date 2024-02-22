import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MusicSearch, MusicSearchProps } from './MusicSearch';
import { BaseComponentDriver } from 'testing-base';

export class MusicSearchDriver extends BaseComponentDriver {
    private props: Partial<MusicSearchProps> = {};

    constructor() {
        super('MusicSearch');
    }

    when: any = {
        rendered: () => {
            render(<MusicSearch {...(this.props as MusicSearchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MusicSearch {...(this.props as MusicSearchProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MusicSearchProps>) => {
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
