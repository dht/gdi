import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Locations, LocationsProps } from './Locations';
import { BaseComponentDriver } from 'testing-base';

export class LocationsDriver extends BaseComponentDriver {
    private props: Partial<LocationsProps> = {};

    constructor() {
        super('Locations');
    }

    when: any = {
        rendered: () => {
            render(<Locations {...(this.props as LocationsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Locations {...(this.props as LocationsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LocationsProps>) => {
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
