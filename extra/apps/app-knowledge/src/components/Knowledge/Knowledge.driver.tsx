import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knowledge, KnowledgeProps } from './Knowledge';
import { BaseComponentDriver } from 'testing-base';

export class KnowledgeDriver extends BaseComponentDriver {
    private props: Partial<KnowledgeProps> = {};

    constructor() {
        super('Knowledge');
    }

    when: any = {
        rendered: () => {
            render(<Knowledge {...(this.props as KnowledgeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Knowledge {...(this.props as KnowledgeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<KnowledgeProps>) => {
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
