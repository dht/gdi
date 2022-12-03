import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JiraParagraph, JiraParagraphProps } from './JiraParagraph';
import { BaseComponentDriver } from 'testing-base';

export class JiraParagraphDriver extends BaseComponentDriver {
    private props: Partial<JiraParagraphProps> = {};

    constructor() {
        super('JiraParagraph');
    }

    when: any = {
        rendered: () => {
            render(<JiraParagraph {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<JiraParagraphProps>) => {
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
