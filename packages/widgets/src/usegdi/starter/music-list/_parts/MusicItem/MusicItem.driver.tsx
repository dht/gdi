import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MusicItem, MusicItemProps } from './MusicItem';
import { BaseComponentDriver } from 'testing-base';

export class MusicItemDriver extends BaseComponentDriver {
    private props: Partial<MusicItemProps> = {};

    constructor() {
        super('MusicItem');
    }

    when: any = {
        rendered: () => {
            render(<MusicItem {...(this.props as MusicItemProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MusicItem {...(this.props as MusicItemProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MusicItemProps>) => {
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
