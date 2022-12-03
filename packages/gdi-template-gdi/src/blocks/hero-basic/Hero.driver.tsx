import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Hero, HeroProps } from './Hero';
import { BaseComponentDriver } from 'testing-base';

export class HeroDriver extends BaseComponentDriver {
    private props: Partial<HeroProps> = {};

    constructor() {
        super('Hero');
    }

    when: any = {
        rendered: () => {
            render(<Hero {...(this.props as HeroProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Hero {...(this.props as HeroProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HeroProps>) => {
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
