import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockInfo, BlockInfoProps } from './BlockInfo';
import { BaseComponentDriver } from 'testing-base';

export class BlockInfoDriver extends BaseComponentDriver {
    private props: Partial<BlockInfoProps> = {};

    constructor() {
        super('BlockInfo');
    }

    when: any = {
        rendered: () => {
            render(<BlockInfo {...(this.props as BlockInfoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockInfo {...(this.props as BlockInfoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockInfoProps>) => {
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
