import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CommandBar, CommandBarProps } from './CommandBar';
import { BaseComponentDriver } from 'testing-base';

export class CommandBarDriver extends BaseComponentDriver {
    private props: Partial<CommandBarProps> = {
        items: [],
        onRun: (_command: ICommandBarItem) => {},
        isDarkMode: true,
    };

    constructor() {
        super('CommandBar');
    }

    when: any = {
        rendered: () => {
            render(<CommandBar {...(this.props as CommandBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <CommandBar {...(this.props as CommandBarProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CommandBarProps>) => {
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
