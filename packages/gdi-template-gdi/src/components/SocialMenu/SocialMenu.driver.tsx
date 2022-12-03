import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SocialMenu, SocialMenuProps } from './SocialMenu';
import { BaseComponentDriver } from 'testing-base';

export class SocialMenuDriver extends BaseComponentDriver {
    private props: Partial<SocialMenuProps> = {};

    constructor() {
        super('SocialMenu');
    }

    when: any = {
        rendered: () => {
            render(<SocialMenu {...(this.props as SocialMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SocialMenu {...(this.props as SocialMenuProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SocialMenuProps>) => {
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
