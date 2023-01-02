import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LevelUps, LevelUpsProps } from './LevelUps';
import { BaseComponentDriver } from 'testing-base';

export class LevelUpsDriver extends BaseComponentDriver {
    private props: Partial<LevelUpsProps> = {};

    constructor() {
        super('LevelUps');
    }

    when: any = {
        rendered: () => {
            render(<LevelUps {...(this.props as LevelUpsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LevelUps {...(this.props as LevelUpsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LevelUpsProps>) => {
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
