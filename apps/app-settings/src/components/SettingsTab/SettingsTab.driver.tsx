import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SettingsTab, SettingsTabProps } from './SettingsTab';
import { BaseComponentDriver } from 'testing-base';

export class SettingsTabDriver extends BaseComponentDriver {
    private props: Partial<SettingsTabProps> = {};

    constructor() {
        super('SettingsTab');
    }

    when: any = {
        rendered: () => {
            render(<SettingsTab {...(this.props as SettingsTabProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SettingsTab {...(this.props as SettingsTabProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SettingsTabProps>) => {
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
