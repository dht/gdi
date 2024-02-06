import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionList, VisionListProps } from './VisionList';
import { BaseComponentDriver } from 'testing-base';

export class VisionListDriver extends BaseComponentDriver {
    private props: Partial<VisionListProps> = {};

    constructor() {
        super('VisionList');
    }

    when: any = {
        rendered: () => {
            render(<VisionList {...(this.props as VisionListProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionList {...(this.props as VisionListProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionListProps>) => {
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
