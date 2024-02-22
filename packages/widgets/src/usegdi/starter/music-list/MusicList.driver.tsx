import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MusicList, MusicListProps } from './MusicList';
import { BaseComponentDriver } from 'testing-base';

export class MusicListDriver extends BaseComponentDriver {
    private props: Partial<MusicListProps> = {};

    constructor() {
        super('MusicList');
    }

    when: any = {
        rendered: () => {
            render(<MusicList {...(this.props as MusicListProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MusicList {...(this.props as MusicListProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MusicListProps>) => {
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
