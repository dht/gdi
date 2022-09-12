import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomBlocks, CustomBlocksProps } from './CustomBlocks';
import { BaseComponentDriver } from 'testing-base';

export class CustomBlocksDriver extends BaseComponentDriver {
    private props: Partial<CustomBlocksProps> = {
    };

    constructor() {
        super('CustomBlocks');
    }

    when: any = {
        rendered: () => {
            render(<CustomBlocks {...(this.props as CustomBlocksProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CustomBlocks {...(this.props as CustomBlocksProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CustomBlocksProps>) => {
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
