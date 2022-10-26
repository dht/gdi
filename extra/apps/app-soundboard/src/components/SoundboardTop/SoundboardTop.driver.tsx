import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SoundboardTop, SoundboardTopProps } from './SoundboardTop';
import { BaseComponentDriver } from 'testing-base';

export class SoundboardTopDriver extends BaseComponentDriver {
    private props: Partial<SoundboardTopProps> = {};

    constructor() {
        super('SoundboardTop');
    }

    when: any = {
        rendered: () => {
            render(<SoundboardTop {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SoundboardTopProps>) => {
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
