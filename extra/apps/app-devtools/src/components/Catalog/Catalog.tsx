import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    Panel,
    Group,
    GroupContent,
    GroupTitle,
} from './Catalog.style';
import { Multi, Form, TypeView } from '@gdi/web-ui';
import { PlatformContext } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';
import { WrappedFilter } from '../WrappedFilter/WrappedFilter';

export type CatalogProps = {
    group?: Json;
    viewMode: string;
    allOptions: any;
    tags: IOptions;
};

export function Catalog(props: CatalogProps) {
    const { group, viewMode, allOptions, tags } = props;

    const { crudDefinitions: allDefinitions } =
        useContext(PlatformContext).state;

    const { t } = useLanguage();

    if (!group) {
        return null;
    }

    const { id, title } = group;
    const header = t(title);

    const definitions: ICrudDefinitions = allDefinitions[id];

    function renderInner() {
        switch (viewMode) {
            case 'newForm':
                return (
                    <Form
                        config={definitions.formNew}
                        data={definitions.formNewDefault ?? {}}
                        allOptions={allOptions}
                        onSave={onSave}
                        onChange={onChange}
                        allDetails={allDetails}
                        tags={tags}
                    />
                );
            case 'editForm':
                return (
                    <Form
                        config={definitions.formEdit}
                        data={formData}
                        allOptions={allOptions}
                        onSave={onSave}
                        onChange={onChange}
                        allDetails={allDetails}
                        tags={tags}
                    />
                );
            case 'table':
                return (
                    <Table
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'gallery':
                return (
                    <Gallery
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'spreadsheet':
                return (
                    <Spreadsheet
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'timeline':
                return (
                    <Timeline
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'calendar':
                return (
                    <Calendar
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'buckets':
                return (
                    <Buckets
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
            case 'filters':
                return (
                    <WrappedFilter
                        group={group}
                        header={header}
                        definitions={definitions}
                        allOptions={allOptions}
                        tags={tags}
                    />
                );
        }
    }

    return (
        <Container
            className='Catalog-container'
            data-testid='Catalog-container'
        >
            <Group key={group.id} className='group'>
                <GroupTitle>{title}</GroupTitle>
                <GroupContent>
                    <Panel>{renderInner()}</Panel>
                    <Panel>
                        <TypeView value={definitions.itemStructure} />
                    </Panel>
                </GroupContent>
            </Group>
        </Container>
    );
}

// .reverse()
// .filter((_i, index) => index === 0);

const formData = {};
const formOptions = {};

const allDetails = {};

const onChange: any = () => {};
const onSave: any = () => {};

export const Table = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions, tags } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'table'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export const Gallery = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions, tags } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'gallery'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export const Spreadsheet = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions, tags } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'spreadsheet'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export const Timeline = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'timeline'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export const Calendar = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'calendar'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export const Buckets = (props: any) => {
    const dispatch = useDispatch();
    const { group, definitions, header, allOptions, tags } = props;

    return (
        <Multi
            key={group.id}
            id={group.id}
            itemType={group.id}
            header={header}
            data={group.data}
            callbacks={{} as any}
            definitions={definitions}
            initialViewMode={'buckets'}
            dispatch={dispatch}
            allOptions={allOptions}
            tags={tags}
            hideParts={['preview']}
        />
    );
};

export default Catalog;
