import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Settings, SettingsProps } from './Settings';
import { BaseComponentDriver } from 'testing-base';

export class SettingsDriver extends BaseComponentDriver {
    private props: Partial<SettingsProps> = {};

    constructor() {
        super('Settings');
    }

    when: any = {
        rendered: () => {
            render(<Settings {...(this.props as SettingsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Settings {...(this.props as SettingsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SettingsProps>) => {
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
