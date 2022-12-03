import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LibrarySelector, LibrarySelectorProps } from './LibrarySelector';
import { BaseComponentDriver } from 'testing-base';

export class LibrarySelectorDriver extends BaseComponentDriver {
    private props: Partial<LibrarySelectorProps> = {};

    constructor() {
        super('LibrarySelector');
    }

    when: any = {
        rendered: () => {
            render(
                <LibrarySelector {...(this.props as LibrarySelectorProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LibrarySelector {...(this.props as LibrarySelectorProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LibrarySelectorProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
