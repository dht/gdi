import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditorMenuPanel, EditorMenuPanelProps } from './EditorMenuPanel';
import { BaseComponentDriver } from 'testing-base';

export class EditorMenuPanelDriver extends BaseComponentDriver {
    private props: Partial<EditorMenuPanelProps> = {
    };

    constructor() {
        super('EditorMenuPanel');
    }

    when: any = {
        rendered: () => {
            render(<EditorMenuPanel {...(this.props as EditorMenuPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<EditorMenuPanel {...(this.props as EditorMenuPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EditorMenuPanelProps>) => {
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
