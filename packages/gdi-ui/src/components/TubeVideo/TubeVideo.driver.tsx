import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeVideo, TubeVideoProps } from './TubeVideo';
import { BaseComponentDriver } from 'testing-base';

export class TubeVideoDriver extends BaseComponentDriver {
    private props: Partial<TubeVideoProps> = {};

    constructor() {
        super('TubeVideo');
    }

    when: any = {
        rendered: () => {
            render(<TubeVideo {...(this.props as TubeVideoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeVideo {...(this.props as TubeVideoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeVideoProps>) => {
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
