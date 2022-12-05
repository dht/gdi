import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainDisplay, MainDisplayProps } from './MainDisplay';
import { BaseComponentDriver } from 'testing-base';

export class MainDisplayDriver extends BaseComponentDriver {
    private props: Partial<MainDisplayProps> = {};

    constructor() {
        super('MainDisplay');
    }

    when: any = {
        rendered: () => {
            render(<MainDisplay {...(this.props as MainDisplayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MainDisplay {...(this.props as MainDisplayProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MainDisplayProps>) => {
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
