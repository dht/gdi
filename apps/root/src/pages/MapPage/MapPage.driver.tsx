import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MapPage, MapPageProps } from './MapPage';
import { BaseComponentDriver } from 'testing-base';

export class MapPageDriver extends BaseComponentDriver {
    private props: Partial<MapPageProps> = {};

    constructor() {
        super('MapPage');
    }

    when: any = {
        rendered: () => {
            render(<MapPage {...(this.props as MapPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MapPage {...(this.props as MapPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MapPageProps>) => {
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
