import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocsMenuMobile, DocsMenuMobileProps } from './DocsMenuMobile';
import { BaseComponentDriver } from 'testing-base';

export class DocsMenuMobileDriver extends BaseComponentDriver {
    private props: Partial<DocsMenuMobileProps> = {};

    constructor() {
        super('DocsMenuMobile');
    }

    when: any = {
        rendered: () => {
            render(<DocsMenuMobile {...(this.props as DocsMenuMobileProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocsMenuMobile {...(this.props as DocsMenuMobileProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocsMenuMobileProps>) => {
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
