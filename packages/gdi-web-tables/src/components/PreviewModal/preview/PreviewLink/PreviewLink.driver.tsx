import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewLink, PreviewLinkProps } from './PreviewLink';
import { BaseComponentDriver } from 'testing-base';

export class PreviewLinkDriver extends BaseComponentDriver {
    private props: Partial<PreviewLinkProps> = {
    };

    constructor() {
        super('PreviewLink');
    }

    when: any = {
        rendered: () => {
            render(<PreviewLink {...(this.props as PreviewLinkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewLink {...(this.props as PreviewLinkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewLinkProps>) => {
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
