import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockOverlay, BlockOverlayProps } from './BlockOverlay';
import { BaseComponentDriver } from 'testing-base';

export class BlockOverlayDriver extends BaseComponentDriver {
    private props: Partial<BlockOverlayProps> = {
    };

    constructor() {
        super('BlockOverlay');
    }

    when: any = {
        rendered: () => {
            render(<BlockOverlay {...(this.props as BlockOverlayProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockOverlay {...(this.props as BlockOverlayProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockOverlayProps>) => {
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
