import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AdditionalInformation, AdditionalInformationProps } from './AdditionalInformation';
import { BaseComponentDriver } from 'testing-base';

export class AdditionalInformationDriver extends BaseComponentDriver {
    private props: Partial<AdditionalInformationProps> = {
    };

    constructor() {
        super('AdditionalInformation');
    }

    when: any = {
        rendered: () => {
            render(<AdditionalInformation {...(this.props as AdditionalInformationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<AdditionalInformation {...(this.props as AdditionalInformationProps)} />);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
