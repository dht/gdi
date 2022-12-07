import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LocalDataViewer, LocalDataViewerProps } from './LocalDataViewer';
import { BaseComponentDriver } from 'testing-base';

export class LocalDataViewerDriver extends BaseComponentDriver {
    private props: Partial<LocalDataViewerProps> = {};

    constructor() {
        super('LocalDataViewer');
    }

    when: any = {
        rendered: () => {
            render(
                <LocalDataViewer {...(this.props as LocalDataViewerProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <LocalDataViewer {...(this.props as LocalDataViewerProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<LocalDataViewerProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
