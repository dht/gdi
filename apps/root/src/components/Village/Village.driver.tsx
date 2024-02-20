import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Village, VillageProps } from './Village';
import { BaseComponentDriver } from 'testing-base';

export class VillageDriver extends BaseComponentDriver {
    private props: Partial<VillageProps> = {};

    constructor() {
        super('Village');
    }

    when: any = {
        rendered: () => {
            render(<Village {...(this.props as VillageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Village {...(this.props as VillageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VillageProps>) => {
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
