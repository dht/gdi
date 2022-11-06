import React from 'react';
import { Container } from './Projects.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type ProjectsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Projects(props: ProjectsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('project');
    const { t } = useLanguage();

    return (
        <Container
            className='Projects-container'
            data-testid='Projects-container'
        >
            <Multi
                id='Projects'
                itemType='project'
                header={t('Projects')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['table', 'spreadsheet']}
                initialViewMode='table'
                dispatch={dispatch}
                allOptions={allOptions}
                hideParts={['preview']}
            />
        </Container>
    );
}

export default Projects;
