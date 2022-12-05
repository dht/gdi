import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    NotificationsButton,
    NotificationsButtonProps,
} from './NotificationsButton';
import { BaseComponentDriver } from 'testing-base';

export class NotificationsButtonDriver extends BaseComponentDriver {
    private props: Partial<NotificationsButtonProps> = {};

    constructor() {
        super('NotificationsButton');
    }

    when: any = {
        rendered: () => {
            render(
                <NotificationsButton
                    {...(this.props as NotificationsButtonProps)}
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
                <NotificationsButton
                    {...(this.props as NotificationsButtonProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<NotificationsButtonProps>) => {
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
