import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Projects, ProjectsProps } from './Projects';
import { BaseComponentDriver } from 'testing-base';

export class ProjectsDriver extends BaseComponentDriver {
    private props: Partial<ProjectsProps> = {};

    constructor() {
        super('Projects');
    }

    when: any = {
        rendered: () => {
            render(<Projects {...(this.props as ProjectsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Projects {...(this.props as ProjectsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ProjectsProps>) => {
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
