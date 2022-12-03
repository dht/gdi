import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyboardShortcuts, KeyboardShortcutsProps } from './KeyboardShortcuts';
import { BaseComponentDriver } from 'testing-base';

export class KeyboardShortcutsDriver extends BaseComponentDriver {
    private props: Partial<KeyboardShortcutsProps> = {};

    constructor() {
        super('KeyboardShortcuts');
    }

    when: any = {
        rendered: () => {
            render(
                <KeyboardShortcuts
                    {...(this.props as KeyboardShortcutsProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <KeyboardShortcuts
                    {...(this.props as KeyboardShortcutsProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<KeyboardShortcutsProps>) => {
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
