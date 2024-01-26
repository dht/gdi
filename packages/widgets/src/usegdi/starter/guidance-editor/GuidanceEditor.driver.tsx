import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GuidanceEditor, GuidanceEditorProps } from './GuidanceEditor';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceEditorDriver extends BaseComponentDriver {
    private props: Partial<GuidanceEditorProps> = {};

    constructor() {
        super('GuidanceEditor');
    }

    when: any = {
        rendered: () => {
            render(<GuidanceEditor {...(this.props as GuidanceEditorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GuidanceEditor {...(this.props as GuidanceEditorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceEditorProps>) => {
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
