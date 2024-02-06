import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionNotes, VisionNotesProps } from './VisionNotes';
import { BaseComponentDriver } from 'testing-base';

export class VisionNotesDriver extends BaseComponentDriver {
    private props: Partial<VisionNotesProps> = {};

    constructor() {
        super('VisionNotes');
    }

    when: any = {
        rendered: () => {
            render(<VisionNotes {...(this.props as VisionNotesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionNotes {...(this.props as VisionNotesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionNotesProps>) => {
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
