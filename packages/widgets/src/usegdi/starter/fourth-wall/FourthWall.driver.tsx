import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FourthWall, FourthWallProps } from './FourthWall';
import { BaseComponentDriver } from 'testing-base';

export class FourthWallDriver extends BaseComponentDriver {
    private props: Partial<FourthWallProps> = {};

    constructor() {
        super('FourthWall');
    }

    when: any = {
        rendered: () => {
            render(<FourthWall {...(this.props as FourthWallProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FourthWall {...(this.props as FourthWallProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FourthWallProps>) => {
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
