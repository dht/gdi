import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Library, LibraryProps } from './Library';
import { BaseComponentDriver } from 'testing-base';

export class LibraryDriver extends BaseComponentDriver {
    private props: Partial<LibraryProps> = {
    };

    constructor() {
        super('Library');
    }

    when: any = {
        rendered: () => {
            render(<Library {...(this.props as LibraryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Library {...(this.props as LibraryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LibraryProps>) => {
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
