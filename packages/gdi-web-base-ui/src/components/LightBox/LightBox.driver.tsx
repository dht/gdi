import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LightBox, LightBoxProps } from './LightBox';
import { BaseComponentDriver } from 'testing-base';

export class LightBoxDriver extends BaseComponentDriver {
    private props: Partial<LightBoxProps> = {
    };

    constructor() {
        super('LightBox');
    }

    when: any = {
        rendered: () => {
            render(<LightBox {...(this.props as LightBoxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LightBox {...(this.props as LightBoxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LightBoxProps>) => {
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
