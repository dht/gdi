import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlexDesignerEmpty, FlexDesignerEmptyProps } from './FlexDesignerEmpty';
import { BaseComponentDriver } from 'testing-base';

export class FlexDesignerEmptyDriver extends BaseComponentDriver {
    private props: Partial<FlexDesignerEmptyProps> = {
    };

    constructor() {
        super('FlexDesignerEmpty');
    }

    when: any = {
        rendered: () => {
            render(<FlexDesignerEmpty {...(this.props as FlexDesignerEmptyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlexDesignerEmpty {...(this.props as FlexDesignerEmptyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlexDesignerEmptyProps>) => {
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
