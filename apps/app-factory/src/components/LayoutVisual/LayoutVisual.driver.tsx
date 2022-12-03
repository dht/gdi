import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LayoutVisual, LayoutVisualProps } from './LayoutVisual';
import { BaseComponentDriver } from 'testing-base';

export class LayoutVisualDriver extends BaseComponentDriver {
    private props: Partial<LayoutVisualProps> = {};

    constructor() {
        super('LayoutVisual');
    }

    when: any = {
        rendered: () => {
            render(<LayoutVisual {...(this.props as LayoutVisualProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LayoutVisual {...(this.props as LayoutVisualProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LayoutVisualProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
