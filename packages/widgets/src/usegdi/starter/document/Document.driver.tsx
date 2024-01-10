import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Document, DocumentProps } from './Document';
import { BaseComponentDriver } from 'testing-base';

export class DocumentDriver extends BaseComponentDriver {
    private props: Partial<DocumentProps> = {};

    constructor() {
        super('Document');
    }

    when: any = {
        rendered: () => {
            render(<Document {...(this.props as DocumentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Document {...(this.props as DocumentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocumentProps>) => {
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
