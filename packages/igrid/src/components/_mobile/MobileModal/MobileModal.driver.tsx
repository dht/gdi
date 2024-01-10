import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileModal, MobileModalProps } from './MobileModal';
import { BaseComponentDriver } from 'testing-base';

export class MobileModalDriver extends BaseComponentDriver {
    private props: Partial<MobileModalProps> = {};

    constructor() {
        super('MobileModal');
    }

    when: any = {
        rendered: () => {
            render(<MobileModal {...(this.props as MobileModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MobileModal {...(this.props as MobileModalProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MobileModalProps>) => {
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
