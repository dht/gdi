import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    Panel,
    Group,
    GroupContent,
    GroupTitle,
    Json,
} from './Catalog.style';
import { Multi, Form, TypeView } from '@gdi/web-ui';
import * as nodes from '@gdi/datasets';
import { getScreenshotThumb, getScreenshot } from 'shared-base';
import { PlatformContext } from '@gdi/platformer';

export type CatalogProps = {};

export function Catalog(_props: CatalogProps) {
    const dispatch = useDispatch();
    const { crudDefinitions: allDefinitions } =
        useContext(PlatformContext).state;

    function renderGroup(group: any) {
        const { id, title } = group;

        const definitions: ICrudDefinitions = allDefinitions[id];

        if (!definitions.formNew) {
            console.log('id ->', id);
            console.log('definitions ->', definitions.formNew);
            console.log('definitions ->', definitions.formEdit);
        }

        return (
            <Group key={group.id} className='group'>
                <GroupTitle>{title}</GroupTitle>
                <GroupContent>
                    <Panel>
                        <Multi
                            id={group.id}
                            itemType={group.id}
                            header={group.title}
                            data={group.data}
                            callbacks={{} as any}
                            definitions={definitions}
                            viewModes={['gallery']}
                            initialViewMode='gallery'
                            dispatch={dispatch}
                            allOptions={{}}
                        />
                    </Panel>
                    <Panel>
                        <Multi
                            id={group.id}
                            itemType={group.id}
                            header={group.title}
                            data={group.data}
                            callbacks={{} as any}
                            definitions={definitions}
                            viewModes={['table']}
                            initialViewMode='table'
                            dispatch={dispatch}
                            allOptions={{}}
                        />
                    </Panel>
                    <Panel>
                        <Multi
                            id={group.id}
                            itemType={group.id}
                            header={group.title}
                            data={group.data}
                            callbacks={{} as any}
                            definitions={definitions}
                            viewModes={['spreadsheet']}
                            initialViewMode='spreadsheet'
                            dispatch={dispatch}
                            allOptions={{}}
                        />
                    </Panel>
                    <Panel>
                        <TypeView value={definitions.itemStructure} />
                    </Panel>
                    <Panel>
                        <h2>New {group.id}</h2>
                        <Form
                            config={definitions.formNew}
                            data={definitions.formNewDefault ?? {}}
                            allOptions={formOptions}
                            onSave={onSave}
                            onChange={onChange}
                            allDetails={allDetails}
                        />
                    </Panel>
                    <Panel>
                        <h2>Edit {group.id}</h2>

                        <Form
                            config={definitions.formEdit}
                            data={formData}
                            allOptions={formOptions}
                            onSave={onSave}
                            onChange={onChange}
                            allDetails={allDetails}
                        />
                    </Panel>
                </GroupContent>
            </Group>
        );
    }

    function renderGroups() {
        return groups.map((group: any) => renderGroup(group));
    }
    return (
        <Container
            className='Catalog-container'
            data-testid='Catalog-container'
        >
            {renderGroups()}
        </Container>
    );
}

const groups = [
    {
        id: 'article',
        title: 'Articles',
        data: Object.values(nodes.articles),
    },
    {
        id: 'event',
        title: 'Events',
        data: Object.values(nodes.events),
    },
    {
        id: 'image',
        title: 'Images',
        data: Object.values(nodes.libraryImages),
    },
    {
        id: 'inbox',
        title: 'Inbox',
        data: Object.values(nodes.inboxMessages),
    },
    {
        id: 'layout',
        title: 'Layouts',
        data: Object.values(nodes.layouts),
    },
    {
        id: 'link',
        title: 'Links',
        data: Object.values(nodes.links),
    },
    {
        id: 'pageInstance',
        title: 'Page Instances',
        data: Object.values(nodes.libraryPageInstances),
    },
    {
        id: 'page',
        title: 'Pages',
        data: Object.values(nodes.libraryPages),
    },
    {
        id: 'post',
        title: 'Posts',
        data: Object.values(nodes.posts),
    },
    {
        id: 'person',
        title: 'People',
        data: Object.values(nodes.persons),
    },
    {
        id: 'sale',
        title: 'Sales',
        data: Object.values(nodes.sales),
    },
    {
        id: 'template',
        title: 'Templates',
        data: [],
    },
    {
        id: 'ticket',
        title: 'Tickets',
        data: Object.values(nodes.tickets),
    },
    {
        id: 'widget',
        title: 'Widgets',
        data: $widgets(nodes.libraryWidgets),
    },
];
// .reverse()
// .filter((_i, index) => index === 0);

const formData = {};
const formOptions = {};

const allDetails = {};

const onChange: any = () => {};
const onSave: any = () => {};

function $widgets(state: Json) {
    return Object.values(state).map((item: any) => {
        const image = getScreenshot(item);
        const thumb = getScreenshotThumb(item);

        return {
            ...item,
            imageUrl: image.imageUrl,
            imageThumbUrl: thumb.thumbUrl,
            ratio: image.imageRatio,
        };
    });
}

export default Catalog;
