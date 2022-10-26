import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NfcPing, NfcPingProps } from './NfcPing';
import { BaseComponentDriver } from 'testing-base';

export class NfcPingDriver extends BaseComponentDriver {
    private props: Partial<NfcPingProps> = {};

    constructor() {
        super('NfcPing');
    }

    when: any = {
        rendered: () => {
            render(<NfcPing {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<NfcPingProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
