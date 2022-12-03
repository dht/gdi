import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signature, SignatureProps } from './Signature';
import { BaseComponentDriver } from 'testing-base';

export class SignatureDriver extends BaseComponentDriver {
    private props: Partial<SignatureProps> = {};

    constructor() {
        super('Signature');
    }

    when: any = {
        rendered: () => {
            render(<Signature {...(this.props as SignatureProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Signature {...(this.props as SignatureProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SignatureProps>) => {
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
