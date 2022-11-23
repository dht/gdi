import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CtaAction, CtaActionProps } from './CtaAction';
import { BaseComponentDriver } from 'testing-base';

export class CtaActionDriver extends BaseComponentDriver {
    private props: Partial<CtaActionProps> = {
    };

    constructor() {
        super('CtaAction');
    }

    when: any = {
        rendered: () => {
            render(<CtaAction {...(this.props as CtaActionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CtaAction {...(this.props as CtaActionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CtaActionProps>) => {
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
