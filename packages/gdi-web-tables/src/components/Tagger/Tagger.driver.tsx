import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tagger, TaggerProps } from './Tagger';
import { BaseComponentDriver } from 'testing-base';

export class TaggerDriver extends BaseComponentDriver {
    private props: Partial<TaggerProps> = {};

    constructor() {
        super('Tagger');
    }

    when: any = {
        rendered: () => {
            render(<Tagger {...(this.props as TaggerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tagger {...(this.props as TaggerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TaggerProps>) => {
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
