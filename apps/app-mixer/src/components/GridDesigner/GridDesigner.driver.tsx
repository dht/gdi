import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GridDesigner, GridDesignerProps } from './GridDesigner';
import { BaseComponentDriver } from 'testing-base';

export class GridDesignerDriver extends BaseComponentDriver {
    private props: Partial<GridDesignerProps> = {
    };

    constructor() {
        super('GridDesigner');
    }

    when: any = {
        rendered: () => {
            render(<GridDesigner {...(this.props as GridDesignerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GridDesigner {...(this.props as GridDesignerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GridDesignerProps>) => {
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
