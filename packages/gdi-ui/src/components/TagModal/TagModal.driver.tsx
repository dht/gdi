import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TagModal, TagModalProps } from './TagModal';
import { BaseComponentDriver } from 'testing-base';

export class TagModalDriver extends BaseComponentDriver {
    private props: Partial<TagModalProps> = {};

    constructor() {
        super('TagModal');
    }

    when: any = {
        rendered: () => {
            render(<TagModal {...(this.props as TagModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TagModal {...(this.props as TagModalProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TagModalProps>) => {
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
