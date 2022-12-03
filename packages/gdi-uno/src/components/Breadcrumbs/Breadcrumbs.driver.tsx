import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { BaseComponentDriver } from 'testing-base';

export class BreadcrumbsDriver extends BaseComponentDriver {
    private props: Partial<BreadcrumbsProps> = {};

    constructor() {
        super('Breadcrumbs');
    }

    when: any = {
        rendered: () => {
            render(<Breadcrumbs {...(this.props as BreadcrumbsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Breadcrumbs {...(this.props as BreadcrumbsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<BreadcrumbsProps>) => {
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
