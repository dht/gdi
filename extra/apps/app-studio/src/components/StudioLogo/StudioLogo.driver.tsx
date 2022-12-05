import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StudioLogo, StudioLogoProps } from './StudioLogo';
import { BaseComponentDriver } from 'testing-base';

export class StudioLogoDriver extends BaseComponentDriver {
    private props: Partial<StudioLogoProps> = {};

    constructor() {
        super('StudioLogo');
    }

    when: any = {
        rendered: () => {
            render(<StudioLogo {...(this.props as StudioLogoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <StudioLogo {...(this.props as StudioLogoProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<StudioLogoProps>) => {
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
