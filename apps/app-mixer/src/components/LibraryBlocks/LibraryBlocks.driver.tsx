import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LibraryBlocks, LibraryBlocksProps } from './LibraryBlocks';
import { BaseComponentDriver } from 'testing-base';

export class LibraryBlocksDriver extends BaseComponentDriver {
    private props: Partial<LibraryBlocksProps> = {
    };

    constructor() {
        super('LibraryBlocks');
    }

    when: any = {
        rendered: () => {
            render(<LibraryBlocks {...(this.props as LibraryBlocksProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LibraryBlocks {...(this.props as LibraryBlocksProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LibraryBlocksProps>) => {
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
