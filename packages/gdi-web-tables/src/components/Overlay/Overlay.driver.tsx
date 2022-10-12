import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overlay, OverlayProps } from './Overlay';
import { BaseComponentDriver } from 'testing-base';

export class OverlayDriver extends BaseComponentDriver {
    private props: Partial<OverlayProps> = {
    };

    constructor() {
        super('Overlay');
    }

    when: any = {
        rendered: () => {
            render(<Overlay {...(this.props as OverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Overlay {...(this.props as OverlayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OverlayProps>) => {
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
