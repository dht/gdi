import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BabylonLogo, BabylonLogoProps } from './BabylonLogo';
import { BaseComponentDriver } from 'testing-base';

export class BabylonLogoDriver extends BaseComponentDriver {
    private props: Partial<BabylonLogoProps> = {};

    constructor() {
        super('BabylonLogo');
    }

    when: any = {
        rendered: () => {
            render(<BabylonLogo {...(this.props as BabylonLogoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BabylonLogo {...(this.props as BabylonLogoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BabylonLogoProps>) => {
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
