import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyboardHint, KeyboardHintProps } from './KeyboardHint';
import { BaseComponentDriver } from 'testing-base';

export class KeyboardHintDriver extends BaseComponentDriver {
    private props: Partial<KeyboardHintProps> = {
    };

    constructor() {
        super('KeyboardHint');
    }

    when: any = {
        rendered: () => {
            render(<KeyboardHint {...(this.props as KeyboardHintProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<KeyboardHint {...(this.props as KeyboardHintProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<KeyboardHintProps>) => {
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
