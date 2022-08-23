import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Placeholder, PlaceholderProps } from './Placeholder';
import { BaseComponentDriver } from 'testing-base';

export class PlaceholderDriver extends BaseComponentDriver {
    private props: Partial<PlaceholderProps> = {
    };

    constructor() {
        super('Placeholder');
    }

    when: any = {
        rendered: () => {
            render(<Placeholder {...(this.props as PlaceholderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Placeholder {...(this.props as PlaceholderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PlaceholderProps>) => {
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
