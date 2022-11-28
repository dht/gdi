import React, { useCallback, useMemo, useState } from 'react';
import Checkboxes from '../Checkboxes/Checkboxes';
import { Bottom, Container } from './ImportExport.style';
import ImportExportSummary from '../ImportExportSummary/ImportExportSummary';
import bytes from 'bytes';
import Button from '../Button/Button';
import { useLocalStorage } from 'react-use';
import { pickBy } from 'shared-base';

export type ImportExportProps = {
    id: string;
    ctaButtonText: string;
    json: Json;
    showExportMessage?: boolean;
    onSubmit: (value: Json) => void;
    onCancel: () => void;
};

export function ImportExport(props: ImportExportProps) {
    const { id, json = {}, ctaButtonText, showExportMessage } = props;

    const [state, patchState] = useLocalStorage<Record<string, boolean>>(
        `CHECKBOXES_${id}`,
        {}
    );

    const onSubmit = useCallback(() => {
        const data = pickBy(json, (_value, key) => (state ?? {})[key]);
        props.onSubmit(data);
    }, [json, state]);

    const parsedOptions = useMemo(() => {
        return options.map((option) => {
            const { id } = option;

            const data = json[id];

            let size = 0,
                disabled = false,
                secondaryText = '-';

            if (typeof data === 'object') {
                size = JSON.stringify(data).length;
                const count = Object.keys(data).length;
                secondaryText = `${count} items, ${bytes(size)}`;
                disabled = false;
            } else {
                disabled = true;
            }

            return {
                ...option,
                secondaryText,
                disabled,
            };
        });
    }, [options]);

    const sizeAndCount = useMemo(() => {
        return Object.keys(json)
            .filter((key) => (state ?? {})[key])
            .reduce(
                (acc, key) => {
                    const data = json[key];
                    if (typeof data === 'object') {
                        acc.size += JSON.stringify(data).length;
                        acc.count += Object.keys(data).length;
                    }
                    return acc;
                },
                {
                    size: 0,
                    count: 0,
                }
            );
    }, [json, state]);

    return (
        <Container
            className='ImportExport-container'
            data-testid='ImportExport-container'
        >
            <Checkboxes
                id={id}
                groups={groups}
                options={parsedOptions}
                onChange={patchState}
                values={state ?? {}}
            />
            <Bottom>
                <ImportExportSummary
                    totalSize={sizeAndCount.size}
                    count={sizeAndCount.count}
                    showExportMessage={showExportMessage}
                />
                <Button title='Cancel' onClick={props.onCancel} />
                <Button title={ctaButtonText} primary onClick={onSubmit} />
            </Bottom>
        </Container>
    );
}

const groups = [
    {
        id: 'library',
        title: 'Library',
    },
    {
        id: 'site',
        title: 'Site',
    },
    {
        id: 'other',
        title: 'Other',
    },
];

const options: IOption[] = [
    {
        id: 'pages',
        text: 'Pages',
        groupId: 'site',
    },
    {
        id: 'pageInstances',
        text: 'Page instances',
        groupId: 'site',
    },
    {
        id: 'instances',
        text: 'Instances',
        groupId: 'site',
    },
    {
        id: 'instancesProps',
        text: 'Instances props',
        groupId: 'site',
    },
    {
        id: 'widgets',
        text: 'Widgets',
        groupId: 'site',
    },
    {
        id: 'images',
        text: 'Images',
        groupId: 'site',
    },
    {
        id: 'datasets',
        text: 'Datasets',
        groupId: 'site',
    },
    {
        id: 'libraryPages',
        text: 'Pages',
        groupId: 'library',
    },
    {
        id: 'libraryPageInstances',
        text: 'Page instances',
        groupId: 'library',
    },
    {
        id: 'libraryInstances',
        text: 'Instances',
        groupId: 'library',
    },
    {
        id: 'libraryInstancesProps',
        text: 'Instances props',
        groupId: 'library',
    },
    {
        id: 'libraryWidgets',
        text: 'Widgets',
        groupId: 'library',
    },
    {
        id: 'libraryImages',
        text: 'Images',
        groupId: 'library',
    },
    {
        id: 'libraryDatasets',
        text: 'Datasets',
        groupId: 'library',
    },
    {
        id: 'locale',
        text: 'Locale',
        groupId: 'other',
    },
    {
        id: 'palette',
        text: 'Palette',
        groupId: 'other',
    },
    {
        id: 'fonts',
        text: 'Fonts',
        groupId: 'other',
    },
    {
        id: 'breakpoints',
        text: 'Breakpoints',
        groupId: 'other',
    },
    {
        id: 'siteProperties',
        text: 'Site properties',
        groupId: 'other',
    },
    {
        id: 'articles',
        text: 'Articles',
        groupId: 'other',
    },
    {
        id: 'layouts',
        text: 'Layouts',
        groupId: 'other',
    },
];

export default ImportExport;
