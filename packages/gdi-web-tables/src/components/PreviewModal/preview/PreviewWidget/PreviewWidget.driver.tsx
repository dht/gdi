import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewWidget, PreviewWidgetProps } from './PreviewWidget';
import { BaseComponentDriver } from 'testing-base';

export class PreviewWidgetDriver extends BaseComponentDriver {
    private props: Partial<PreviewWidgetProps> = {
    };

    constructor() {
        super('PreviewWidget');
    }

    when: any = {
        rendered: () => {
            render(<PreviewWidget {...(this.props as PreviewWidgetProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewWidget {...(this.props as PreviewWidgetProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewWidgetProps>) => {
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
