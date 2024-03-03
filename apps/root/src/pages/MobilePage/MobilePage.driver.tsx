import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobilePage, MobilePageProps } from './MobilePage';
import { BaseComponentDriver } from 'testing-base';

export class MobilePageDriver extends BaseComponentDriver {
    private props: Partial<MobilePageProps> = {};

    constructor() {
        super('MobilePage');
    }

    when: any = {
        rendered: () => {
            render(<MobilePage {...(this.props as MobilePageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MobilePage {...(this.props as MobilePageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MobilePageProps>) => {
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
