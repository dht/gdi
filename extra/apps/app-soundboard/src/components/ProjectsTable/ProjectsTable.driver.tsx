import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProjectsTable, ProjectsTableProps } from './ProjectsTable';
import { BaseComponentDriver } from 'testing-base';

export class ProjectsTableDriver extends BaseComponentDriver {
    private props: Partial<ProjectsTableProps> = {};

    constructor() {
        super('ProjectsTable');
    }

    when: any = {
        rendered: () => {
            render(<ProjectsTable {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ProjectsTableProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
