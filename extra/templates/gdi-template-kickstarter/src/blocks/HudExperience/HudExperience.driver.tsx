import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HudExperience, HudExperienceProps } from './HudExperience';
import { BaseComponentDriver } from 'testing-base';

export class HudExperienceDriver extends BaseComponentDriver {
    private props: Partial<HudExperienceProps> = {};

    constructor() {
        super('HudExperience');
    }

    when: any = {
        rendered: () => {
            render(<HudExperience {...(this.props as HudExperienceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HudExperience {...(this.props as HudExperienceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudExperienceProps>) => {
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
