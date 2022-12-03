import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Label, LabelProps } from './Label';
import { BaseComponentDriver } from 'testing-base';

export class LabelDriver extends BaseComponentDriver {
    private props: Partial<LabelProps> = {};

    constructor() {
        super('Label');
    }

    when: any = {
        rendered: () => {
            render(<Label {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LabelProps>) => {
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
