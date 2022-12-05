import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Notifications, NotificationsProps } from './Notifications';
import { BaseComponentDriver } from 'testing-base';

export class NotificationsDriver extends BaseComponentDriver {
    private props: Partial<NotificationsProps> = {};

    constructor() {
        super('Notifications');
    }

    when: any = {
        rendered: () => {
            render(<Notifications {...(this.props as NotificationsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Notifications {...(this.props as NotificationsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<NotificationsProps>) => {
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
