import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IsoBrowser, IsoBrowserProps } from './IsoBrowser';
import { BaseComponentDriver } from 'testing-base';

export class IsoBrowserDriver extends BaseComponentDriver {
    private props: Partial<IsoBrowserProps> = {};

    constructor() {
        super('IsoBrowser');
    }

    when: any = {
        rendered: () => {
            render(<IsoBrowser {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<IsoBrowserProps>) => {
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
