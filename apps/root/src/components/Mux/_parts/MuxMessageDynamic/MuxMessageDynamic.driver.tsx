import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxMessageDynamic, MuxMessageDynamicProps } from './MuxMessageDynamic';
import { BaseComponentDriver } from 'testing-base';

export class MuxMessageDynamicDriver extends BaseComponentDriver {
    private props: Partial<MuxMessageDynamicProps> = {};

    constructor() {
        super('MuxMessageDynamic');
    }

    when: any = {
        rendered: () => {
            render(<MuxMessageDynamic {...(this.props as MuxMessageDynamicProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxMessageDynamic {...(this.props as MuxMessageDynamicProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxMessageDynamicProps>) => {
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
