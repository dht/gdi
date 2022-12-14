import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewTemplate, PreviewTemplateProps } from './PreviewTemplate';
import { BaseComponentDriver } from 'testing-base';

export class PreviewTemplateDriver extends BaseComponentDriver {
    private props: Partial<PreviewTemplateProps> = {};

    constructor() {
        super('PreviewTemplate');
    }

    when: any = {
        rendered: () => {
            render(
                <PreviewTemplate {...(this.props as PreviewTemplateProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewTemplate {...(this.props as PreviewTemplateProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewTemplateProps>) => {
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
