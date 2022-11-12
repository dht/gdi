import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoBreadcrumbs, UnoBreadcrumbsProps } from './UnoBreadcrumbs';
import { BaseComponentDriver } from 'testing-base';

export class UnoBreadcrumbsDriver extends BaseComponentDriver {
    private props: Partial<UnoBreadcrumbsProps> = {
    };

    constructor() {
        super('UnoBreadcrumbs');
    }

    when: any = {
        rendered: () => {
            render(<UnoBreadcrumbs {...(this.props as UnoBreadcrumbsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnoBreadcrumbs {...(this.props as UnoBreadcrumbsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoBreadcrumbsProps>) => {
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
