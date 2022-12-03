import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { MyResume, MyResumeProps } from './MyResume';
import { BaseComponentDriver } from 'testing-base';

export class MyResumeDriver extends BaseComponentDriver {
    private props: Partial<MyResumeProps> = {};

    constructor() {
        super('MyResume');
    }

    when: any = {
        rendered: () => {
            render(<MyResume {...(this.props as MyResumeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MyResume {...(this.props as MyResumeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MyResumeProps>) => {
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
