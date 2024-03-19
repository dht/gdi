import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocumentFocus, DocumentFocusProps } from './DocumentFocus';
import { BaseComponentDriver } from 'testing-base';

export class DocumentFocusDriver extends BaseComponentDriver {
    private props: Partial<DocumentFocusProps> = {};

    constructor() {
        super('DocumentFocus');
    }

    when: any = {
        rendered: () => {
            render(<DocumentFocus {...(this.props as DocumentFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocumentFocus {...(this.props as DocumentFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocumentFocusProps>) => {
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
