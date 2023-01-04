import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GuidanceFeatures, GuidanceFeaturesProps } from './GuidanceFeatures';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceFeaturesDriver extends BaseComponentDriver {
    private props: Partial<GuidanceFeaturesProps> = {};

    constructor() {
        super('GuidanceFeatures');
    }

    when: any = {
        rendered: () => {
            render(<GuidanceFeatures {...(this.props as GuidanceFeaturesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GuidanceFeatures {...(this.props as GuidanceFeaturesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceFeaturesProps>) => {
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
