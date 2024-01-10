import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScenePlayer, ScenePlayerProps } from './ScenePlayer';
import { BaseComponentDriver } from 'testing-base';

export class ScenePlayerDriver extends BaseComponentDriver {
    private props: Partial<ScenePlayerProps> = {};

    constructor() {
        super('ScenePlayer');
    }

    when: any = {
        rendered: () => {
            render(<ScenePlayer {...(this.props as ScenePlayerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ScenePlayer {...(this.props as ScenePlayerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ScenePlayerProps>) => {
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
