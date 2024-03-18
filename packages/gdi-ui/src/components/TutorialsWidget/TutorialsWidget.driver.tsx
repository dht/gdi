import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TutorialsWidget, TutorialsWidgetProps } from './TutorialsWidget';
import { BaseComponentDriver } from 'testing-base';

export class TutorialsWidgetDriver extends BaseComponentDriver {
    private props: Partial<TutorialsWidgetProps> = {};

    constructor() {
        super('TutorialsWidget');
    }

    when: any = {
        rendered: () => {
            render(<TutorialsWidget {...(this.props as TutorialsWidgetProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TutorialsWidget {...(this.props as TutorialsWidgetProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TutorialsWidgetProps>) => {
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
