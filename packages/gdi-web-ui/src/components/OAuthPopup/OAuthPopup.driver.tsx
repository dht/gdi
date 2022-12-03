import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OAuthPopup, OAuthPopupProps } from './OAuthPopup';
import { BaseComponentDriver } from 'testing-base';

export class OAuthPopupDriver extends BaseComponentDriver {
    private props: Partial<OAuthPopupProps> = {};

    constructor() {
        super('OAuthPopup');
    }

    when: any = {
        rendered: () => {
            render(<OAuthPopup {...(this.props as OAuthPopupProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<OAuthPopupProps>) => {
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
