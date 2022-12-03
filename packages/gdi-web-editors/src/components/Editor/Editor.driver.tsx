import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Editor, EditorProps } from './Editor';
import { BaseComponentDriver } from 'testing-base';

export class EditorDriver extends BaseComponentDriver {
    private props: Partial<EditorProps> = {};

    constructor() {
        super('Editor');
    }

    when: any = {
        rendered: () => {
            render(<Editor {...(this.props as EditorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Editor {...(this.props as EditorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EditorProps>) => {
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
