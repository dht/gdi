import classnames from 'classnames';
import React from 'react';
import { Wrapper, Key, Percent, Row, Title } from './ProjectsTable.style';
import { GenericTable, ColorPicker } from '@gdi/web-ui';
import Duration from '../Duration/Duration';

export type ProjectsTableProps = {
    projects: IProject[];
    onProjectClick: (project: IProject) => void;
    onColorChange: (project: IProject, newColor: string) => void;
};

type IProjectTransient = {
    isSelected: boolean;
    transientMinutes: number;
};

export function ProjectsTable(props: ProjectsTableProps) {
    const { projects } = props;

    function row(rowProps: any) {
        const item = rowProps.item as IProject & IProjectTransient;
        const { key, name, isSelected, color, transientMinutes } = item;

        const className = classnames({
            selected: isSelected,
            faded: transientMinutes === 0,
        });

        return (
            <Row
                className={className}
                key={key}
                onMouseDown={(ev: React.MouseEvent<HTMLDivElement>) => {
                    if (!hasParent(ev.target, 'ColorPicker-wrapper')) {
                        props.onProjectClick(item);
                    }
                }}
            >
                <Key>{key}</Key>
                <Title>{name}</Title>

                <Percent>
                    {transientMinutes ? (
                        <Duration minutes={transientMinutes}></Duration>
                    ) : (
                        ''
                    )}
                </Percent>
                <ColorPicker
                    color={color ?? ''}
                    onChange={(value: string) =>
                        props.onColorChange(item, value)
                    }
                />
            </Row>
        );
    }

    return (
        <Wrapper
            className='ProjectsTable-wrapper'
            data-testid='ProjectsTable-wrapper'
        >
            <GenericTable data={projects} autoHeight>
                {row}
            </GenericTable>
        </Wrapper>
    );
}

export default ProjectsTable;

function hasParent(node: any, name: string) {
    let output = false;
    let cursor: any = node;

    while (cursor.parentNode) {
        if (cursor.classList.contains(name)) {
            output = true;
        }
        cursor = cursor.parentNode;
    }

    return output;
}
