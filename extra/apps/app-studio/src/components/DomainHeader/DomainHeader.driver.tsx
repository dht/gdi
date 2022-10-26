import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DomainHeader, DomainHeaderProps } from './DomainHeader';
import { BaseComponentDriver } from 'testing-base';

export class DomainHeaderDriver extends BaseComponentDriver {
    private props: Partial<DomainHeaderProps> = {};

    constructor() {
        super('DomainHeader');
    }

    when: any = {
        rendered: () => {
            render(<DomainHeader {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DomainHeaderProps>) => {
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
