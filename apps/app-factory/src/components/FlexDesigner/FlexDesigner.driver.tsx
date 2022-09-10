import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlexDesigner, FlexDesignerProps } from './FlexDesigner';
import { BaseComponentDriver } from 'testing-base';

export class FlexDesignerDriver extends BaseComponentDriver {
    private props: Partial<FlexDesignerProps> = {
    };

    constructor() {
        super('FlexDesigner');
    }

    when: any = {
        rendered: () => {
            render(<FlexDesigner {...(this.props as FlexDesignerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlexDesigner {...(this.props as FlexDesignerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlexDesignerProps>) => {
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
