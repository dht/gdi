import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProTip, ProTipProps } from './ProTip';
import { BaseComponentDriver } from 'testing-base';

export class ProTipDriver extends BaseComponentDriver {
    private props: Partial<ProTipProps> = {};

    constructor() {
        super('ProTip');
    }

    when: any = {
        rendered: () => {
            render(<ProTip {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ProTipProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
