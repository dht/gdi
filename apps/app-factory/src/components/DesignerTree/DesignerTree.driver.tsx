import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DesignerTree, DesignerTreeProps } from './DesignerTree';
import { BaseComponentDriver } from 'testing-base';

export class DesignerTreeDriver extends BaseComponentDriver {
    private props: Partial<DesignerTreeProps> = {
    };

    constructor() {
        super('DesignerTree');
    }

    when: any = {
        rendered: () => {
            render(<DesignerTree {...(this.props as DesignerTreeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DesignerTree {...(this.props as DesignerTreeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DesignerTreeProps>) => {
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
