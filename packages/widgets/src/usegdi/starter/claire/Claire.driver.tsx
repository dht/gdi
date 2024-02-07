import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Claire, ClaireProps } from './Claire';
import { BaseComponentDriver } from 'testing-base';

export class ClaireDriver extends BaseComponentDriver {
    private props: Partial<ClaireProps> = {};

    constructor() {
        super('Claire');
    }

    when: any = {
        rendered: () => {
            render(<Claire {...(this.props as ClaireProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Claire {...(this.props as ClaireProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ClaireProps>) => {
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
