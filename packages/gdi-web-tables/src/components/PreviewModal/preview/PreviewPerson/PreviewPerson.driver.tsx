import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewPerson, PreviewPersonProps } from './PreviewPerson';
import { BaseComponentDriver } from 'testing-base';

export class PreviewPersonDriver extends BaseComponentDriver {
    private props: Partial<PreviewPersonProps> = {};

    constructor() {
        super('PreviewPerson');
    }

    when: any = {
        rendered: () => {
            render(<PreviewPerson {...(this.props as PreviewPersonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewPerson {...(this.props as PreviewPersonProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewPersonProps>) => {
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
