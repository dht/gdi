import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskStats, TaskStatsProps } from './TaskStats';
import { BaseComponentDriver } from 'testing-base';

export class TaskStatsDriver extends BaseComponentDriver {
    private props: Partial<TaskStatsProps> = {};

    constructor() {
        super('TaskStats');
    }

    when: any = {
        rendered: () => {
            render(<TaskStats {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TaskStatsProps>) => {
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
