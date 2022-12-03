import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion, AccordionProps } from './Accordion';
import { BaseComponentDriver } from 'testing-base';

export class AccordionDriver extends BaseComponentDriver {
    private props: Partial<AccordionProps> = {};

    constructor() {
        super('Accordion');
    }

    when: any = {
        rendered: () => {
            render(<Accordion {...(this.props as AccordionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Accordion {...(this.props as AccordionProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<AccordionProps>) => {
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
