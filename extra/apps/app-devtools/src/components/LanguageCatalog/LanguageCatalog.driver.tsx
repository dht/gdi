import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageCatalog, CatalogProps } from './LanguageCatalog';
import { BaseComponentDriver } from 'testing-base';

export class CatalogDriver extends BaseComponentDriver {
    private props: Partial<CatalogProps> = {};

    constructor() {
        super('Catalog');
    }

    when: any = {
        rendered: () => {
            render(<LanguageCatalog {...(this.props as CatalogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LanguageCatalog {...(this.props as CatalogProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CatalogProps>) => {
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
