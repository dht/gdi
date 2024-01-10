import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SceneBuilder, SceneBuilderProps } from './SceneBuilder';
import { BaseComponentDriver } from 'testing-base';

export class SceneBuilderDriver extends BaseComponentDriver {
    private props: Partial<SceneBuilderProps> = {};

    constructor() {
        super('SceneBuilder');
    }

    when: any = {
        rendered: () => {
            render(<SceneBuilder {...(this.props as SceneBuilderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SceneBuilder {...(this.props as SceneBuilderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SceneBuilderProps>) => {
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
