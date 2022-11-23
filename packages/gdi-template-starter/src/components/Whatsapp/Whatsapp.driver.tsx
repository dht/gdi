import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Whatsapp, WhatsappProps } from './Whatsapp';
import { BaseComponentDriver } from 'testing-base';

export class WhatsappDriver extends BaseComponentDriver {
    private props: Partial<WhatsappProps> = {
    };

    constructor() {
        super('Whatsapp');
    }

    when: any = {
        rendered: () => {
            render(<Whatsapp {...(this.props as WhatsappProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Whatsapp {...(this.props as WhatsappProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WhatsappProps>) => {
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
