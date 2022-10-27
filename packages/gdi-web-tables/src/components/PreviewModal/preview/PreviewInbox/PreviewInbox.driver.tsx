import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewInbox, PreviewInboxProps } from './PreviewInbox';
import { BaseComponentDriver } from 'testing-base';

export class PreviewInboxDriver extends BaseComponentDriver {
    private props: Partial<PreviewInboxProps> = {
    };

    constructor() {
        super('PreviewInbox');
    }

    when: any = {
        rendered: () => {
            render(<PreviewInbox {...(this.props as PreviewInboxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewInbox {...(this.props as PreviewInboxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewInboxProps>) => {
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
