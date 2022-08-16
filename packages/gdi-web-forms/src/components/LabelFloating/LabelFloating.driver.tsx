import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LabelFloating, LabelFloatingProps } from './LabelFloating';
import { BaseComponentDriver } from 'testing-base';

export class LabelFloatingDriver extends BaseComponentDriver {
    private props: Partial<LabelFloatingProps> = {};

    constructor() {
        super('LabelFloating');
    }

    when: any = {
        rendered: () => {
            render(<LabelFloating {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LabelFloatingProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
