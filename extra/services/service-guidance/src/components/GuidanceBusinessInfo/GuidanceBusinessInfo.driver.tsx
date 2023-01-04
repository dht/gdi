import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GuidanceBusinessInfo, GuidanceBusinessInfoProps } from './GuidanceBusinessInfo';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceBusinessInfoDriver extends BaseComponentDriver {
    private props: Partial<GuidanceBusinessInfoProps> = {};

    constructor() {
        super('GuidanceBusinessInfo');
    }

    when: any = {
        rendered: () => {
            render(<GuidanceBusinessInfo {...(this.props as GuidanceBusinessInfoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GuidanceBusinessInfo {...(this.props as GuidanceBusinessInfoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceBusinessInfoProps>) => {
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
