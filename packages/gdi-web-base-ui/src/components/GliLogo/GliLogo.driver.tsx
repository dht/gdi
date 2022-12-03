import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GliLogo, GliLogoProps } from './GliLogo';
import { BaseComponentDriver } from 'testing-base';

export class GliLogoDriver extends BaseComponentDriver {
    private props: Partial<GliLogoProps> = {};

    constructor() {
        super('GliLogo');
    }

    when: any = {
        rendered: () => {
            render(<GliLogo {...(this.props as GliLogoProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<GliLogoProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
