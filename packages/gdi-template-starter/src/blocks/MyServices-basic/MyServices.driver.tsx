import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { MyServices, MyServicesProps } from './MyServices';
import { BaseComponentDriver } from 'testing-base';

export class MyServicesDriver extends BaseComponentDriver {
    private props: Partial<MyServicesProps> = {};

    constructor() {
        super('MyServices');
    }

    when: any = {
        rendered: () => {
            render(<MyServices {...(this.props as MyServicesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MyServices {...(this.props as MyServicesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MyServicesProps>) => {
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
