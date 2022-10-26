import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Ideas, IdeasProps } from './Ideas';
import { BaseComponentDriver } from 'testing-base';

export class IdeasDriver extends BaseComponentDriver {
    private props: Partial<IdeasProps> = {};

    constructor() {
        super('Ideas');
    }

    when: any = {
        rendered: () => {
            render(<Ideas {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<IdeasProps>) => {
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
