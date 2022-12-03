import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EngineView, EngineViewProps } from './EngineView';
import { BaseComponentDriver } from 'testing-base';

export class EngineViewDriver extends BaseComponentDriver {
    private props: Partial<EngineViewProps> = {};

    constructor() {
        super('EngineView');
    }

    when: any = {
        rendered: () => {
            render(<EngineView {...(this.props as EngineViewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <EngineView {...(this.props as EngineViewProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<EngineViewProps>) => {
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
