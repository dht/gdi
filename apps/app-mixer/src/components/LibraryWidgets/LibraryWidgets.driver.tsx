import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LibraryWidgets, LibraryWidgetsProps } from './LibraryWidgets';
import { BaseComponentDriver } from 'testing-base';

export class LibraryWidgetsDriver extends BaseComponentDriver {
    private props: Partial<LibraryWidgetsProps> = {};

    constructor() {
        super('LibraryWidgets');
    }

    when: any = {
        rendered: () => {
            render(<LibraryWidgets {...(this.props as LibraryWidgetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LibraryWidgets {...(this.props as LibraryWidgetsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LibraryWidgetsProps>) => {
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
