import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainMenu, MainMenuProps } from './MainMenu';
import { BaseComponentDriver } from 'testing-base';

export class MainMenuDriver extends BaseComponentDriver {
    private props: Partial<MainMenuProps> = {
    };

    constructor() {
        super('MainMenu');
    }

    when: any = {
        rendered: () => {
            render(<MainMenu {...(this.props as MainMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MainMenu {...(this.props as MainMenuProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MainMenuProps>) => {
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
