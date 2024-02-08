import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnderConstruction, UnderConstructionProps } from './UnderConstruction';
import { BaseComponentDriver } from 'testing-base';

export class UnderConstructionDriver extends BaseComponentDriver {
    private props: Partial<UnderConstructionProps> = {};

    constructor() {
        super('UnderConstruction');
    }

    when: any = {
        rendered: () => {
            render(<UnderConstruction {...(this.props as UnderConstructionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnderConstruction {...(this.props as UnderConstructionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnderConstructionProps>) => {
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
