import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Subtitles, SubtitlesProps } from './Subtitles';
import { BaseComponentDriver } from 'testing-base';

export class SubtitlesDriver extends BaseComponentDriver {
    private props: Partial<SubtitlesProps> = {};

    constructor() {
        super('Subtitles');
    }

    when: any = {
        rendered: () => {
            render(<Subtitles {...(this.props as SubtitlesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Subtitles {...(this.props as SubtitlesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SubtitlesProps>) => {
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
