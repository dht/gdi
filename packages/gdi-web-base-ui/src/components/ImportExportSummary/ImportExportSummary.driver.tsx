import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImportExportSummary, ImportExportSummaryProps } from './ImportExportSummary';
import { BaseComponentDriver } from 'testing-base';

export class ImportExportSummaryDriver extends BaseComponentDriver {
    private props: Partial<ImportExportSummaryProps> = {
    };

    constructor() {
        super('ImportExportSummary');
    }

    when: any = {
        rendered: () => {
            render(<ImportExportSummary {...(this.props as ImportExportSummaryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImportExportSummary {...(this.props as ImportExportSummaryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImportExportSummaryProps>) => {
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
