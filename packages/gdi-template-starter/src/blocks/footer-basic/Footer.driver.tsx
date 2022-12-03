import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { Footer, FooterProps } from './Footer';
import { BaseComponentDriver } from 'testing-base';

export class FooterDriver extends BaseComponentDriver {
    private props: Partial<FooterProps> = {};

    constructor() {
        super('Footer');
    }

    when: any = {
        rendered: () => {
            render(<Footer {...(this.props as FooterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Footer {...(this.props as FooterProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FooterProps>) => {
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
