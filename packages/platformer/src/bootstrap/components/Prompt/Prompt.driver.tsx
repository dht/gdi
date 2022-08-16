import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Prompt, PromptProps } from './Prompt';
import { BaseComponentDriver } from 'testing-base';

export class PromptDriver extends BaseComponentDriver {
    private props: Partial<PromptProps> = {
    };

    constructor() {
        super('Prompt');
    }

    when: any = {
        rendered: () => {
            render(<Prompt {...(this.props as PromptProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Prompt {...(this.props as PromptProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PromptProps>) => {
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
