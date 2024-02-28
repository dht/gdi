import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContextRecipe, ContextRecipeProps } from './ContextRecipe';
import { BaseComponentDriver } from 'testing-base';

export class ContextRecipeDriver extends BaseComponentDriver {
    private props: Partial<ContextRecipeProps> = {};

    constructor() {
        super('ContextRecipe');
    }

    when: any = {
        rendered: () => {
            render(<ContextRecipe {...(this.props as ContextRecipeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ContextRecipe {...(this.props as ContextRecipeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ContextRecipeProps>) => {
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
