import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxMenu, MuxMenuProps } from './MuxMenu';
import { BaseComponentDriver } from 'testing-base';

export class MuxMenuDriver extends BaseComponentDriver {
    private props: Partial<MuxMenuProps> = {};

    constructor() {
        super('MuxMenu');
    }

    when: any = {
        rendered: () => {
            render(<MuxMenu {...(this.props as MuxMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxMenu {...(this.props as MuxMenuProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxMenuProps>) => {
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
