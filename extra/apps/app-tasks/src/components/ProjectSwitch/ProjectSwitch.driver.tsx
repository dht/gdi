import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProjectSwitch, ProjectSwitchProps } from './ProjectSwitch';
import { BaseComponentDriver } from 'testing-base';

export class ProjectSwitchDriver extends BaseComponentDriver {
    private props: Partial<ProjectSwitchProps> = {};

    constructor() {
        super('ProjectSwitch');
    }

    when: any = {
        rendered: () => {
            render(<ProjectSwitch {...(this.props as ProjectSwitchProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ProjectSwitch {...(this.props as ProjectSwitchProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ProjectSwitchProps>) => {
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
