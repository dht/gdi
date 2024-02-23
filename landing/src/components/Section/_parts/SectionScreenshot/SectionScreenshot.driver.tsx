import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionScreenshot, SectionScreenshotProps } from './SectionScreenshot';
import { BaseComponentDriver } from 'testing-base';

export class SectionScreenshotDriver extends BaseComponentDriver {
    private props: Partial<SectionScreenshotProps> = {};

    constructor() {
        super('SectionScreenshot');
    }

    when: any = {
        rendered: () => {
            render(<SectionScreenshot {...(this.props as SectionScreenshotProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionScreenshot {...(this.props as SectionScreenshotProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionScreenshotProps>) => {
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
