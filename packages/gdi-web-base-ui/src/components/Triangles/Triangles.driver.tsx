import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Triangles, TrianglesProps } from './Triangles';
import { BaseComponentDriver } from 'testing-base';

export class TrianglesDriver extends BaseComponentDriver {
    private props: Partial<TrianglesProps> = {};

    constructor() {
        super('Triangles');
    }

    when: any = {
        rendered: () => {
            render(<Triangles {...(this.props as TrianglesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Triangles {...(this.props as TrianglesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<TrianglesProps>) => {
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
