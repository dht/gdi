import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModelViewer, ModelViewerProps } from './ModelViewer';
import { BaseComponentDriver } from 'testing-base';

export class ModelViewerDriver extends BaseComponentDriver {
    private props: Partial<ModelViewerProps> = {};

    constructor() {
        super('ModelViewer');
    }

    when: any = {
        rendered: () => {
            render(<ModelViewer {...(this.props as ModelViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ModelViewer {...(this.props as ModelViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ModelViewerProps>) => {
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
