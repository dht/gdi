import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsTutorials, DetailsTutorialsProps } from './DetailsTutorials';
import { BaseComponentDriver } from 'testing-base';

export class DetailsTutorialsDriver extends BaseComponentDriver {
    private props: Partial<DetailsTutorialsProps> = {};

    constructor() {
        super('DetailsTutorials');
    }

    when: any = {
        rendered: () => {
            render(<DetailsTutorials {...(this.props as DetailsTutorialsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DetailsTutorials {...(this.props as DetailsTutorialsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DetailsTutorialsProps>) => {
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
