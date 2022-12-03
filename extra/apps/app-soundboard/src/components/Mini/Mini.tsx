import React from 'react';
import { Wrapper } from './mini.style';
import { Gauge } from '@gdi/web-ui';

type IProjectPlus = IProject & { transientMinutes: number };

export type MiniProps = {
    projects: IProjectPlus[];
    dailyHours?: number;
};

export function Mini(props: MiniProps) {
    const { projects, dailyHours = 18 } = props;

    function renderProject(project: IProjectPlus) {
        const percent = Math.round(
            (project.transientMinutes / dailyHours) * 100
        );

        return (
            <Gauge
                key={project.id}
                title={project.name}
                value={project.transientMinutes}
                flavour='duration'
                percent={percent}
            />
        );
    }

    function renderProjects() {
        return projects.map((project: IProjectPlus) => renderProject(project));
    }

    return (
        <Wrapper className='Mini-wrapper' data-testid='Mini-wrapper'>
            {renderProjects()}
        </Wrapper>
    );
}

export default Mini;
