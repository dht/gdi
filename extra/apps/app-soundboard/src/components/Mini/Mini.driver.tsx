import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mini, MiniProps } from './Mini';
import { BaseComponentDriver } from 'testing-base';

export class MiniDriver extends BaseComponentDriver {
    private props: Partial<MiniProps> = {};

    constructor() {
        super('Mini');
    }

    when: any = {
        rendered: () => {
            render(<Mini {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<MiniProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
