import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxOverlay, MuxOverlayProps } from './MuxOverlay';
import { BaseComponentDriver } from 'testing-base';

export class MuxOverlayDriver extends BaseComponentDriver {
    private props: Partial<MuxOverlayProps> = {};

    constructor() {
        super('MuxOverlay');
    }

    when: any = {
        rendered: () => {
            render(<MuxOverlay {...(this.props as MuxOverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxOverlay {...(this.props as MuxOverlayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxOverlayProps>) => {
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
