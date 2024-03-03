import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CtxRecipe, CtxRecipeProps } from './CtxRecipe';
import { BaseComponentDriver } from 'testing-base';

export class CtxRecipeDriver extends BaseComponentDriver {
    private props: Partial<CtxRecipeProps> = {};

    constructor() {
        super('CtxRecipe');
    }

    when: any = {
        rendered: () => {
            render(<CtxRecipe {...(this.props as CtxRecipeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CtxRecipe {...(this.props as CtxRecipeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CtxRecipeProps>) => {
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
