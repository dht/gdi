import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GithubLink, GithubLinkProps } from './GithubLink';
import { BaseComponentDriver } from 'testing-base';

export class GithubLinkDriver extends BaseComponentDriver {
    private props: Partial<GithubLinkProps> = {
    };

    constructor() {
        super('GithubLink');
    }

    when: any = {
        rendered: () => {
            render(<GithubLink {...(this.props as GithubLinkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GithubLink {...(this.props as GithubLinkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GithubLinkProps>) => {
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
