import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileMiniMap, MobileMiniMapProps } from './MobileMiniMap';
import { BaseComponentDriver } from 'testing-base';

export class MobileMiniMapDriver extends BaseComponentDriver {
    private props: Partial<MobileMiniMapProps> = {};

    constructor() {
        super('MobileMiniMap');
    }

    when: any = {
        rendered: () => {
            render(<MobileMiniMap {...(this.props as MobileMiniMapProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MobileMiniMap {...(this.props as MobileMiniMapProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MobileMiniMapProps>) => {
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
