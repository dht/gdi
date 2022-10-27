import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewEvent, PreviewEventProps } from './PreviewEvent';
import { BaseComponentDriver } from 'testing-base';

export class PreviewEventDriver extends BaseComponentDriver {
    private props: Partial<PreviewEventProps> = {
    };

    constructor() {
        super('PreviewEvent');
    }

    when: any = {
        rendered: () => {
            render(<PreviewEvent {...(this.props as PreviewEventProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewEvent {...(this.props as PreviewEventProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewEventProps>) => {
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
