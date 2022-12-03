import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Bucket, BucketProps } from './Bucket';
import { BaseComponentDriver } from 'testing-base';

export class BucketDriver extends BaseComponentDriver {
    private props: Partial<BucketProps> = {};

    constructor() {
        super('Bucket');
    }

    when: any = {
        rendered: () => {
            render(<Bucket {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<BucketProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
