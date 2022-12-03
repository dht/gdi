import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageTools, PageToolsProps } from './PageTools';
import { BaseComponentDriver } from 'testing-base';

export class PageToolsDriver extends BaseComponentDriver {
    private props: Partial<PageToolsProps> = {};

    constructor() {
        super('PageTools');
    }

    when: any = {
        rendered: () => {
            render(<PageTools {...(this.props as PageToolsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PageTools {...(this.props as PageToolsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PageToolsProps>) => {
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
