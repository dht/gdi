import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { MyNumbers, MyNumbersProps } from './MyNumbers';
import { BaseComponentDriver } from 'testing-base';

export class MyNumbersDriver extends BaseComponentDriver {
    private props: Partial<MyNumbersProps> = {};

    constructor() {
        super('MyNumbers');
    }

    when: any = {
        rendered: () => {
            render(<MyNumbers {...(this.props as MyNumbersProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MyNumbers {...(this.props as MyNumbersProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MyNumbersProps>) => {
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
