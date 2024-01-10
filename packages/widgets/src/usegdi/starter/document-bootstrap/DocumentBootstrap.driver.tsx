import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocumentBootstrap, DocumentBootstrapProps } from './DocumentBootstrap';
import { BaseComponentDriver } from 'testing-base';

export class DocumentBootstrapDriver extends BaseComponentDriver {
    private props: Partial<DocumentBootstrapProps> = {};

    constructor() {
        super('DocumentBootstrap');
    }

    when: any = {
        rendered: () => {
            render(<DocumentBootstrap {...(this.props as DocumentBootstrapProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocumentBootstrap {...(this.props as DocumentBootstrapProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocumentBootstrapProps>) => {
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
