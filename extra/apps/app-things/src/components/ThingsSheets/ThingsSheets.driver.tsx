import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThingsSheets, ThingsSheetsProps } from './ThingsSheets';
import { BaseComponentDriver } from 'testing-base';

export class ThingsSheetsDriver extends BaseComponentDriver {
    private props: Partial<ThingsSheetsProps> = {};

    constructor() {
        super('ThingsSheets');
    }

    when: any = {
        rendered: () => {
            render(<ThingsSheets {...(this.props as ThingsSheetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ThingsSheets {...(this.props as ThingsSheetsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ThingsSheetsProps>) => {
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
