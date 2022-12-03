import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlexDesignerEmpty, FlexDesignerEmptyProps } from './FlexDesignerEmpty';
import { BaseComponentDriver } from 'testing-base';

export class FlexDesignerEmptyDriver extends BaseComponentDriver {
    private props: Partial<FlexDesignerEmptyProps> = {};

    constructor() {
        super('FlexDesignerEmpty');
    }

    when: any = {
        rendered: () => {
            render(
                <FlexDesignerEmpty
                    {...(this.props as FlexDesignerEmptyProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <FlexDesignerEmpty
                    {...(this.props as FlexDesignerEmptyProps)}
                />
            );
        },
    };

    given: any = {
        wrapperClassNametial<FlexDesignerEmptyProps>) => {
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
