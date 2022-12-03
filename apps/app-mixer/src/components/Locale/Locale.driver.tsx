import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Locale, LocaleProps } from './Locale';
import { BaseComponentDriver } from 'testing-base';

export class LocaleDriver extends BaseComponentDriver {
    private props: Partial<LocaleProps> = {};

    constructor() {
        super('Locale');
    }

    when: any = {
        rendered: () => {
            render(<Locale {...(this.props as LocaleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Locale {...(this.props as LocaleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LocaleProps>) => {
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
