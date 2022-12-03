import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    AdditionalInformation,
    AdditionalInformationProps,
} from './AdditionalInformation';
import { BaseComponentDriver } from 'testing-base';

export class AdditionalInformationDriver extends BaseComponentDriver {
    private props: Partial<AdditionalInformationProps> = {};

    constructor() {
        super('AdditionalInformation');
    }

    when: any = {
        rendered: () => {
            render(
                <AdditionalInformation
                    {...(this.props as AdditionalInformationProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <AdditionalInformation
                    {...(this.props as AdditionalInformationProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<AdditionalInformationProps>) => {
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
