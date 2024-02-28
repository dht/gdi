import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxFlows, MuxFlowsProps } from './MuxFlows';
import { BaseComponentDriver } from 'testing-base';

export class MuxFlowsDriver extends BaseComponentDriver {
    private props: Partial<MuxFlowsProps> = {};

    constructor() {
        super('MuxFlows');
    }

    when: any = {
        rendered: () => {
            render(<MuxFlows {...(this.props as MuxFlowsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxFlows {...(this.props as MuxFlowsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxFlowsProps>) => {
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
