import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KnowledgeSheets, KnowledgeSheetsProps } from './KnowledgeSheets';
import { BaseComponentDriver } from 'testing-base';

export class KnowledgeSheetsDriver extends BaseComponentDriver {
    private props: Partial<KnowledgeSheetsProps> = {
    };

    constructor() {
        super('KnowledgeSheets');
    }

    when: any = {
        rendered: () => {
            render(<KnowledgeSheets {...(this.props as KnowledgeSheetsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<KnowledgeSheets {...(this.props as KnowledgeSheetsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<KnowledgeSheetsProps>) => {
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
