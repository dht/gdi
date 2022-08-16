import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WireFrames, WireFramesProps } from './WireFrames';
import { BaseComponentDriver } from 'testing-base';

export class WireFramesDriver extends BaseComponentDriver {
    private props: Partial<WireFramesProps> = {};

    constructor() {
        super('WireFrames');
    }

    when: any = {
        rendered: () => {
            render(<WireFrames {...(this.props as WireFramesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <WireFrames {...(this.props as WireFramesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WireFramesProps>) => {
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
