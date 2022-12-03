import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EngineEdit, EngineEditProps } from './EngineEdit';
import { BaseComponentDriver } from 'testing-base';

export class EngineEditDriver extends BaseComponentDriver {
    private props: Partial<EngineEditProps> = {};

    constructor() {
        super('EngineEdit');
    }

    when: any = {
        rendered: () => {
            render(<EngineEdit {...(this.props as EngineEditProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <EngineEdit {...(this.props as EngineEditProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<EngineEditProps>) => {
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
