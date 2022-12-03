import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SiteProperties, SitePropertiesProps } from './SiteProperties';
import { BaseComponentDriver } from 'testing-base';

export class SitePropertiesDriver extends BaseComponentDriver {
    private props: Partial<SitePropertiesProps> = {};

    constructor() {
        super('SiteProperties');
    }

    when: any = {
        rendered: () => {
            render(<SiteProperties {...(this.props as SitePropertiesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SiteProperties {...(this.props as SitePropertiesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SitePropertiesProps>) => {
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
