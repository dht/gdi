import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Question, QuestionProps } from './Question';
import { BaseComponentDriver } from 'testing-base';

export class QuestionDriver extends BaseComponentDriver {
    private props: Partial<QuestionProps> = {};

    constructor() {
        super('Question');
    }

    when: any = {
        rendered: () => {
            render(<Question {...(this.props as QuestionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Question {...(this.props as QuestionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<QuestionProps>) => {
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
