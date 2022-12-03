import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Datasets, DatasetsProps } from './Datasets';
import { BaseComponentDriver } from 'testing-base';

export class DatasetsDriver extends BaseComponentDriver {
    private props: Partial<DatasetsProps> = {};

    constructor() {
        super('Datasets');
    }

    when: any = {
        rendered: () => {
            render(<Datasets {...(this.props as DatasetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Datasets {...(this.props as DatasetsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<DatasetsProps>) => {
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
