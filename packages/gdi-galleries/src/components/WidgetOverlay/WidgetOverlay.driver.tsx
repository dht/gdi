import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WidgetOverlay, WidgetOverlayProps } from './WidgetOverlay';
import { BaseComponentDriver } from 'testing-base';

export class WidgetOverlayDriver extends BaseComponentDriver {
    private props: Partial<WidgetOverlayProps> = {};

    constructor() {
        super('WidgetOverlay');
    }

    when: any = {
        rendered: () => {
            render(<WidgetOverlay {...(this.props as WidgetOverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <WidgetOverlay {...(this.props as WidgetOverlayProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WidgetOverlayProps>) => {
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
