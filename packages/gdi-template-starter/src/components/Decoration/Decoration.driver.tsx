import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Decoration, DecorationProps } from './Decoration';
import { BaseComponentDriver } from 'testing-base';

export class DecorationDriver extends BaseComponentDriver {
    private props: Partial<DecorationProps> = {
    };

    constructor() {
        super('Decoration');
    }

    when: any = {
        rendered: () => {
            render(<Decoration {...(this.props as DecorationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Decoration {...(this.props as DecorationProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DecorationProps>) => {
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
