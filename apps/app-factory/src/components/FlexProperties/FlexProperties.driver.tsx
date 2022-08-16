import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlexProperties, FlexPropertiesProps } from './FlexProperties';
import { BaseComponentDriver } from 'testing-base';

export class FlexPropertiesDriver extends BaseComponentDriver {
    private props: Partial<FlexPropertiesProps> = {
    };

    constructor() {
        super('FlexProperties');
    }

    when: any = {
        rendered: () => {
            render(<FlexProperties {...(this.props as FlexPropertiesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlexProperties {...(this.props as FlexPropertiesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlexPropertiesProps>) => {
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
