import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { SectionHeader, SectionHeaderProps } from './SectionHeader';
import { BaseComponentDriver } from 'testing-base';

export class SectionHeaderDriver extends BaseComponentDriver {
    private props: Partial<SectionHeaderProps> = {};

    constructor() {
        super('SectionHeader');
    }

    when: any = {
        rendered: () => {
            render(<SectionHeader {...(this.props as SectionHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SectionHeader {...(this.props as SectionHeaderProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SectionHeaderProps>) => {
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
