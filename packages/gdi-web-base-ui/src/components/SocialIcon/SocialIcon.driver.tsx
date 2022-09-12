import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SocialIcon, SocialIconProps } from './SocialIcon';
import { BaseComponentDriver } from 'testing-base';

export class SocialIconDriver extends BaseComponentDriver {
    private props: Partial<SocialIconProps> = {};

    constructor() {
        super('SocialIcon');
    }

    when: any = {
        rendered: () => {
            render(<SocialIcon {...(this.props as SocialIconProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SocialIconProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
