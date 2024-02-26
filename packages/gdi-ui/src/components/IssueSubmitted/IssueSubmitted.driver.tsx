import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IssueSubmitted, IssueSubmittedProps } from './IssueSubmitted';
import { BaseComponentDriver } from 'testing-base';

export class IssueSubmittedDriver extends BaseComponentDriver {
    private props: Partial<IssueSubmittedProps> = {};

    constructor() {
        super('IssueSubmitted');
    }

    when: any = {
        rendered: () => {
            render(<IssueSubmitted {...(this.props as IssueSubmittedProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<IssueSubmitted {...(this.props as IssueSubmittedProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<IssueSubmittedProps>) => {
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
