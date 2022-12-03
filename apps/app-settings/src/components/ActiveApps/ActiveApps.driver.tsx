import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ActiveApps, ActiveAppsProps } from './ActiveApps';
import { BaseComponentDriver } from 'testing-base';

export class ActiveAppsDriver extends BaseComponentDriver {
    private props: Partial<ActiveAppsProps> = {};

    constructor() {
        super('ActiveApps');
    }

    when: any = {
        rendered: () => {
            render(<ActiveApps {...(this.props as ActiveAppsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ActiveApps {...(this.props as ActiveAppsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ActiveAppsProps>) => {
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
