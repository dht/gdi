import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProjectsTiles, ProjectsTilesProps } from './ProjectsTiles';
import { BaseComponentDriver } from 'testing-base';

export class ProjectsTilesDriver extends BaseComponentDriver {
    private props: Partial<ProjectsTilesProps> = {};

    constructor() {
        super('ProjectsTiles');
    }

    when: any = {
        rendered: () => {
            render(<ProjectsTiles {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ProjectsTilesProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
