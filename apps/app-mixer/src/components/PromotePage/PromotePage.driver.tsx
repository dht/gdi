import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PromotePage, PromotePageProps } from './PromotePage';
import { BaseComponentDriver } from 'testing-base';

export class PromotePageDriver extends BaseComponentDriver {
    private props: Partial<PromotePageProps> = {};

    constructor() {
        super('PromotePage');
    }

    when: any = {
        rendered: () => {
            render(<PromotePage {...(this.props as PromotePageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.Wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PromotePage {...(this.props as PromotePageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PromotePageProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.Wrapper.className;
        },
        label: () => {
            return this.Wrapper.innerHTML;
        },
    };
}
