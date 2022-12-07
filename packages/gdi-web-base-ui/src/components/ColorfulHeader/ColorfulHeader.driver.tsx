import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColorfulHeader, ColorfulHeaderProps } from './ColorfulHeader';
import { BaseComponentDriver } from 'testing-base';

export class ColorfulHeaderDriver extends BaseComponentDriver {
    private props: Partial<ColorfulHeaderProps> = {};

    constructor() {
        super('ColorfulHeader');
    }

    when: any = {
        rendered: () => {
            render(<ColorfulHeader {...(this.props as ColorfulHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ColorfulHeader {...(this.props as ColorfulHeaderProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ColorfulHeaderProps>) => {
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
