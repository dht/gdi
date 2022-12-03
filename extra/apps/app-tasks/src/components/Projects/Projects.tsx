import React from 'react';
import { Wrapper } from './Projects.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type ProjectsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Projects(props: ProjectsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('project');

    return (
        <Wrapper className='Projects-wrapper' data-testid='Projects-wrapper'>
            <Multi
                id='Projects'
                itemType='project'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Projects;
