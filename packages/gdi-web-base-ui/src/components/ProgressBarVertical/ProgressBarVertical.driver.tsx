import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    ProgressBarVertical,
    ProgressBarVerticalProps,
} from './ProgressBarVertical';
import { BaseComponentDriver } from 'testing-base';

export class ProgressBarDriver extends BaseComponentDriver {
    private props: Partial<ProgressBarVerticalProps> = {};

    constructor() {
        super('ProgressBar');
    }

    when: any = {
        rendered: () => {
            render(
                <ProgressBarVertical
                    {...(this.props as ProgressBarVerticalProps)}
                />
            );
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ProgressBarVerticalProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
