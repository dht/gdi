import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Views, ViewsProps } from './Views';
import { BaseComponentDriver } from 'testing-base';

export class ViewsDriver extends BaseComponentDriver {
    private props: Partial<ViewsProps> = {
    };

    constructor() {
        super('Views');
    }

    when: any = {
        rendered: () => {
            render(<Views {...(this.props as ViewsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Views {...(this.props as ViewsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ViewsProps>) => {
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
