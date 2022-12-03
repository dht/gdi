import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SocialIcons, SocialIconsProps } from './SocialIcons';
import { BaseComponentDriver } from 'testing-base';

export class SocialIconsDriver extends BaseComponentDriver {
    private props: Partial<SocialIconsProps> = {};

    constructor() {
        super('SocialIcons');
    }

    when: any = {
        rendered: () => {
            render(<SocialIcons {...(this.props as SocialIconsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SocialIcons {...(this.props as SocialIconsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SocialIconsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
