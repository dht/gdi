import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GenericOverlay, GenericOverlayProps } from './GenericOverlay';
import { BaseComponentDriver } from 'testing-base';

export class GenericOverlayDriver extends BaseComponentDriver {
    private props: Partial<GenericOverlayProps> = {};

    constructor() {
        super('GenericOverlay');
    }

    when: any = {
        rendered: () => {
            render(<GenericOverlay {...(this.props as GenericOverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <GenericOverlay {...(this.props as GenericOverlayProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<GenericOverlayProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
