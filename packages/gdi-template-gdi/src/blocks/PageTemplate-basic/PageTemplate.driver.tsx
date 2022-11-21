import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageTemplate, PageTemplateProps } from './PageTemplate';
import { BaseComponentDriver } from 'testing-base';

export class PageTemplateDriver extends BaseComponentDriver {
    private props: Partial<PageTemplateProps> = {
    };

    constructor() {
        super('PageTemplate');
    }

    when: any = {
        rendered: () => {
            render(<PageTemplate {...(this.props as PageTemplateProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PageTemplate {...(this.props as PageTemplateProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageTemplateProps>) => {
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
