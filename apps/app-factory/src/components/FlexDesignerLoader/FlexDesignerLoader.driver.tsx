import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlexDesignerLoader, FlexDesignerLoaderProps } from './FlexDesignerLoader';
import { BaseComponentDriver } from 'testing-base';

export class FlexDesignerLoaderDriver extends BaseComponentDriver {
    private props: Partial<FlexDesignerLoaderProps> = {
    };

    constructor() {
        super('FlexDesignerLoader');
    }

    when: any = {
        rendered: () => {
            render(<FlexDesignerLoader {...(this.props as FlexDesignerLoaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlexDesignerLoader {...(this.props as FlexDesignerLoaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlexDesignerLoaderProps>) => {
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
