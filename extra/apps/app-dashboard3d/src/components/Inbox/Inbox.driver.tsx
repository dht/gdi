import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Inbox, InboxProps } from './Inbox';
import { BaseComponentDriver } from 'testing-base';

export class InboxDriver extends BaseComponentDriver {
    private props: Partial<InboxProps> = {
    };

    constructor() {
        super('Inbox');
    }

    when: any = {
        rendered: () => {
            render(<Inbox {...(this.props as InboxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Inbox {...(this.props as InboxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InboxProps>) => {
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
