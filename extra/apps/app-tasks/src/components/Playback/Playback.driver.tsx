import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Playback, PlaybackProps } from './Playback';
import { BaseComponentDriver } from 'testing-base';

export class PlaybackDriver extends BaseComponentDriver {
    private props: Partial<PlaybackProps> = {};

    constructor() {
        super('Playback');
    }

    when: any = {
        rendered: () => {
            render(<Playback {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<PlaybackProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
