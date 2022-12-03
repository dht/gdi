import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewPage, PreviewPageProps } from './PreviewPage';
import { BaseComponentDriver } from 'testing-base';

export class PreviewPageDriver extends BaseComponentDriver {
    private props: Partial<PreviewPageProps> = {};

    constructor() {
        super('PreviewPage');
    }

    when: any = {
        rendered: () => {
            render(<PreviewPage {...(this.props as PreviewPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewPage {...(this.props as PreviewPageProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewPageProps>) => {
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
