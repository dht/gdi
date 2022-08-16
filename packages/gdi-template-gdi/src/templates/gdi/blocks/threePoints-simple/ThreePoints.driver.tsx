import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThreePoints, ThreePointsProps } from './ThreePoints';
import { BaseComponentDriver } from 'testing-base';

export class ThreePointsDriver extends BaseComponentDriver {
    private props: Partial<ThreePointsProps> = {
    };

    constructor() {
        super('ThreePoints');
    }

    when: any = {
        rendered: () => {
            render(<ThreePoints {...(this.props as ThreePointsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ThreePoints {...(this.props as ThreePointsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ThreePointsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
