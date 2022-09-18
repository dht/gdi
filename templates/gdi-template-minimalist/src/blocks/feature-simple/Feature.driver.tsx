import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Feature, FeatureProps } from './Feature';
import { BaseComponentDriver } from 'testing-base';

export class FeatureDriver extends BaseComponentDriver {
    private props: Partial<FeatureProps> = {
    };

    constructor() {
        super('Feature');
    }

    when: any = {
        rendered: () => {
            render(<Feature {...(this.props as FeatureProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Feature {...(this.props as FeatureProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FeatureProps>) => {
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
