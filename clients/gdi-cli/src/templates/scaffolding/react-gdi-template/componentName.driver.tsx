import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { $CMP, $CMPProps } from './$CMP';
import { BaseComponentDriver } from 'testing-base';

export class $CMPDriver extends BaseComponentDriver {
    private props: Partial<$CMPProps> = {};

    constructor() {
        super('$CMP');
    }

    when: any = {
        rendered: () => {
            render(<$CMP {...(this.props as $CMPProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<$CMP {...(this.props as $CMPProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<$CMPProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
