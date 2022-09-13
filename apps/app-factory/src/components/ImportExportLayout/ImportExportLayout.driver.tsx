import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImportExportLayout, ImportExportLayoutProps } from './ImportExportLayout';
import { BaseComponentDriver } from 'testing-base';

export class ImportExportLayoutDriver extends BaseComponentDriver {
    private props: Partial<ImportExportLayoutProps> = {
    };

    constructor() {
        super('ImportExportLayout');
    }

    when: any = {
        rendered: () => {
            render(<ImportExportLayout {...(this.props as ImportExportLayoutProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImportExportLayout {...(this.props as ImportExportLayoutProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImportExportLayoutProps>) => {
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
