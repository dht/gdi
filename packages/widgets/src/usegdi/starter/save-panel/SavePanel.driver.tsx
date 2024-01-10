import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SavePanel, SavePanelProps } from './SavePanel';
import { BaseComponentDriver } from 'testing-base';

export class SavePanelDriver extends BaseComponentDriver {
    private props: Partial<SavePanelProps> = {};

    constructor() {
        super('SavePanel');
    }

    when: any = {
        rendered: () => {
            render(<SavePanel {...(this.props as SavePanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SavePanel {...(this.props as SavePanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SavePanelProps>) => {
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
