import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { AboutMe, AboutMeProps } from './AboutMe';
import { BaseComponentDriver } from 'testing-base';

export class AboutMeDriver extends BaseComponentDriver {
    private props: Partial<AboutMeProps> = {};

    constructor() {
        super('AboutMe');
    }

    when: any = {
        rendered: () => {
            render(<AboutMe {...(this.props as AboutMeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AboutMe {...(this.props as AboutMeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AboutMeProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
