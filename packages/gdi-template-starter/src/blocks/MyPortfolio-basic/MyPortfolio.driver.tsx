import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { render, fireEvent } from '@testing-library/react';
import { MyPortfolio, MyPortfolioProps } from './MyPortfolio';
import { BaseComponentDriver } from 'testing-base';

export class MyPortfolioDriver extends BaseComponentDriver {
    private props: Partial<MyPortfolioProps> = {};

    constructor() {
        super('MyPortfolio');
    }

    when: any = {
        rendered: () => {
            render(<MyPortfolio {...(this.props as MyPortfolioProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MyPortfolio {...(this.props as MyPortfolioProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MyPortfolioProps>) => {
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
