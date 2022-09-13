import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImportExportWidget, ImportExportWidgetProps } from './ImportExportWidget';
import { BaseComponentDriver } from 'testing-base';

export class ImportExportWidgetDriver extends BaseComponentDriver {
    private props: Partial<ImportExportWidgetProps> = {
    };

    constructor() {
        super('ImportExportWidget');
    }

    when: any = {
        rendered: () => {
            render(<ImportExportWidget {...(this.props as ImportExportWidgetProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImportExportWidget {...(this.props as ImportExportWidgetProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImportExportWidgetProps>) => {
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
