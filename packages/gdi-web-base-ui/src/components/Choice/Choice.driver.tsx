import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Choice, ChoiceProps } from './Choice';
import { BaseComponentDriver } from 'testing-base';

export class ChoiceDriver extends BaseComponentDriver {
    private props: Partial<ChoiceProps> = {
    };

    constructor() {
        super('Choice');
    }

    when: any = {
        rendered: () => {
            render(<Choice {...(this.props as ChoiceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Choice {...(this.props as ChoiceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ChoiceProps>) => {
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
