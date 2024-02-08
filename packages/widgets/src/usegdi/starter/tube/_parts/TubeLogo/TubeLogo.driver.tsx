import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeLogo, TubeLogoProps } from './TubeLogo';
import { BaseComponentDriver } from 'testing-base';

export class TubeLogoDriver extends BaseComponentDriver {
    private props: Partial<TubeLogoProps> = {};

    constructor() {
        super('TubeLogo');
    }

    when: any = {
        rendered: () => {
            render(<TubeLogo {...(this.props as TubeLogoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeLogo {...(this.props as TubeLogoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeLogoProps>) => {
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
