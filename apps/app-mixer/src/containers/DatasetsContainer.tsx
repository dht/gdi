import React, { useCallback, useEffect, useMemo, useState } from 'react';
import bytes from 'bytes';
import Datasets from '../components/Datasets/Datasets';
import { actions, selectors } from '../store';
import { downloadJson } from 'shared-base';
import { prompt, toast, allColors } from '@gdi/web-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useFirstLoad } from '@gdi/hooks';
import { useSetState } from 'react-use';

export const DatasetsContainer = () => {
    const dispatch = useDispatch();
    const dataSets: Json = useSelector(selectors.raw.$rawLibraryDatasets);
    const [selectedNodeId, setSelectedNodeId] = useState<string>('');
    const [value, setValue] = useSetState(dataSets);

    useFirstLoad(() => {
        setValue(dataSets);
    }, dataSets);

    const nodes = useMemo(() => {
        return Object.keys(dataSets)
            .sort()
            .filter((key) => !['id', 'stateKey', '_modifiedDate'].includes(key))
            .filter((key) => dataSets[key])
            .map((key, index) => {
                const content = JSON.stringify(dataSets[key]);
                const contentSize = bytes(content.length);

                return {
                    id: key,
                    nodeType: contentSize,
                    color: allColors[index],
                };
            });
    }, [dataSets]);

    const nodeContent = useMemo(() => {
        return value[selectedNodeId];
    }, [value]);

    const focusOnFirstNode = useCallback(() => {
        const firstNodeId = nodes[0]?.id;
        setSelectedNodeId(firstNodeId);
    }, [nodes]);

    useEffect(() => {
        if (selectedNodeId) {
            return;
        }

        if (document.location.hash) {
            setSelectedNodeId(document.location.hash.replace('#', ''));
            return;
        }

        focusOnFirstNode();
    }, [nodes, selectedNodeId]);

    const callbacks = useMemo(
        () => ({
            onSave: (change: Json) => {
                const newValue = {
                    ...value,
                    [selectedNodeId]: change,
                };

                setValue(newValue);
                dispatch(actions.libraryDatasets.patch(newValue));
                toast.show('Datasets saved');
            },
            onChange: (change: Json) => {
                const newValue = {
                    ...value,
                    [selectedNodeId]: change,
                };

                setValue(newValue);
            },
            onDelete: (nodeId: string) => {
                const newValue = {
                    ...value,
                    [nodeId]: null,
                };

                setValue(newValue);
                dispatch(actions.libraryDatasets.patch(newValue));
                focusOnFirstNode();
                toast.show('Dataset deleted');
            },
            onDownload: () => {
                const json = dataSets[selectedNodeId];

                downloadJson(`dataset-${selectedNodeId}.json`, {
                    [selectedNodeId]: json,
                });
            },

            onNew: async () => {
                const { value: key, didCancel } = await prompt.input({
                    title: 'New Dataset',
                    description: 'Dataset name:',
                    placeholder: 'For instance "teamMembers" or "features"',
                    defaultValue: '',
                    submitButtonText: 'Set (⏎)',
                });

                const newKey = key as string;

                if (didCancel || !key) {
                    return;
                }

                if (value[newKey]) {
                    toast.show(`Key ${newKey} already exists`, 'error');
                    return;
                }

                setValue({
                    ...value,
                    [newKey]: {},
                });

                setSelectedNodeId(newKey);

                dispatch(
                    actions.libraryDatasets.patch({
                        ...value,
                        [newKey]: {},
                    })
                );
            },
            onSelectNode: (nodeId: string) => {
                document.location.hash = nodeId;
                setSelectedNodeId(nodeId);
            },
        }),
        [value, dataSets, selectedNodeId]
    );

    return (
        <Datasets
            nodes={nodes}
            nodeContent={nodeContent}
            callbacks={callbacks}
            selectedNodeId={selectedNodeId}
        />
    );
};

export default DatasetsContainer;
