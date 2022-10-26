import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskTitle, TaskTitleProps } from './TaskTitle';
import { BaseComponentDriver } from 'testing-base';

export class TaskTitleDriver extends BaseComponentDriver {
    private props: Partial<TaskTitleProps> = {};

    constructor() {
        super('TaskTitle');
    }

    when: any = {
        rendered: () => {
            render(<TaskTitle {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TaskTitleProps>) => {
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
