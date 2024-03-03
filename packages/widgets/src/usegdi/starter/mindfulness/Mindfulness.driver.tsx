import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mindfulness, MindfulnessProps } from './Mindfulness';
import { BaseComponentDriver } from 'testing-base';

export class MindfulnessDriver extends BaseComponentDriver {
    private props: Partial<MindfulnessProps> = {};

    constructor() {
        super('Mindfulness');
    }

    when: any = {
        rendered: () => {
            render(<Mindfulness {...(this.props as MindfulnessProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Mindfulness {...(this.props as MindfulnessProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MindfulnessProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
