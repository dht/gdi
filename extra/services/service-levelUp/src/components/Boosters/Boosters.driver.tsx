import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Boosters, BoostersProps } from './Boosters';
import { BaseComponentDriver } from 'testing-base';

export class BoostersDriver extends BaseComponentDriver {
    private props: Partial<BoostersProps> = {};

    constructor() {
        super('Boosters');
    }

    when: any = {
        rendered: () => {
            render(<Boosters {...(this.props as BoostersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Boosters {...(this.props as BoostersProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BoostersProps>) => {
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
