import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImportExport, ImportExportProps } from './ImportExport';
import { BaseComponentDriver } from 'testing-base';

export class ImportExportDriver extends BaseComponentDriver {
    private props: Partial<ImportExportProps> = {};

    constructor() {
        super('ImportExport');
    }

    when: any = {
        rendered: () => {
            render(<ImportExport {...(this.props as ImportExportProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ImportExport {...(this.props as ImportExportProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ImportExportProps>) => {
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
