import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CurrentIds, CurrentIdsProps } from './CurrentIds';
import { BaseComponentDriver } from 'testing-base';

export class CurrentIdsDriver extends BaseComponentDriver {
    private props: Partial<CurrentIdsProps> = {};

    constructor() {
        super('CurrentIds');
    }

    when: any = {
        rendered: () => {
            render(<CurrentIds {...(this.props as CurrentIdsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CurrentIds {...(this.props as CurrentIdsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CurrentIdsProps>) => {
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
