import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Versioning, VersioningProps } from './Versioning';
import { BaseComponentDriver } from 'testing-base';

export class VersioningDriver extends BaseComponentDriver {
    private props: Partial<VersioningProps> = {};

    constructor() {
        super('Versioning');
    }

    when: any = {
        rendered: () => {
            render(<Versioning {...(this.props as VersioningProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Versioning {...(this.props as VersioningProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<VersioningProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.Wrapper.className;
        },
        label: () => {
            return this.Wrapper.innerHTML;
        },
    };
}
