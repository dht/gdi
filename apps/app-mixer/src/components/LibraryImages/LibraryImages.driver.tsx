import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LibraryImages, LibraryImagesProps } from './LibraryImages';
import { BaseComponentDriver } from 'testing-base';

export class LibraryImagesDriver extends BaseComponentDriver {
    private props: Partial<LibraryImagesProps> = {};

    constructor() {
        super('LibraryImages');
    }

    when: any = {
        rendered: () => {
            render(<LibraryImages {...(this.props as LibraryImagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LibraryImages {...(this.props as LibraryImagesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LibraryImagesProps>) => {
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
