import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewModal, PreviewModalProps } from './PreviewModal';
import { BaseComponentDriver } from 'testing-base';

export class PreviewModalDriver extends BaseComponentDriver {
    private props: Partial<PreviewModalProps> = {
    };

    constructor() {
        super('PreviewModal');
    }

    when: any = {
        rendered: () => {
            render(<PreviewModal {...(this.props as PreviewModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewModal {...(this.props as PreviewModalProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewModalProps>) => {
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
