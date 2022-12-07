import React, { useCallback, useEffect, useState } from 'react';
import { Button, Code, IconButton, toast, VerticalTabs } from '@gdi/web-ui';
import { useMeasure } from 'react-use';
import {
    Actions,
    Column,
    Wrapper,
    Content,
    Editors,
    Error,
    H1,
    Header,
} from './Datasets.style';

export type DatasetsProps = {
    nodes: INodeWithColor[];
    nodeContent: Json;
    callbacks: {
        onSave: (value: Json) => void;
        onChange: (value: Json) => void;
        onDownload: () => void;
        onNew: () => void;
        onDelete: (nodeId: string) => void;
        onSelectNode: (nodeId: string) => void;
    };
    selectedNodeId: string;
    autoSaveDate?: number;
};

export function Datasets(props: DatasetsProps) {
    const { nodes, nodeContent, callbacks, selectedNodeId } = props;
    const [ref, { height }] = useMeasure<HTMLDivElement>();
    const [error, setError] = useState<string | undefined>(undefined);
    const [editorValue, setEditorValue] = useState('');

    useEffect(() => {
        setEditorValue(JSON.stringify(nodeContent, null, 4));
    }, [nodeContent]);

    const validate = useCallback(() => {
        try {
            return JSON.parse(editorValue);
        } catch (err) {
            const errorMessage = 'Not a valid JSON';
            setError(errorMessage);
            toast.show(errorMessage, 'error');
            return;
        }
    }, [editorValue]);

    const onSave = useCallback(() => {
        const json = validate();

        if (!json) {
            return;
        }

        setError('');

        callbacks.onSave(json);
    }, [editorValue]);

    const onDelete = useCallback(() => {
        callbacks.onDelete(selectedNodeId);
    }, [selectedNodeId]);

    const onSelectNode = useCallback(
        (nodeId: string) => {
            if (editorValue === 'null') {
                callbacks.onSelectNode(nodeId);
                return;
            }

            const json = validate();

            if (!json) {
                return;
            }

            setError('');

            callbacks.onChange(json);
            callbacks.onSelectNode(nodeId);
        },
        [editorValue]
    );

    return (
        <Wrapper
            className='Datasets-wrapper'
            data-testid='Datasets-wrapper'
            ref={ref}
        >
            <Header>
                <H1>Datasets</H1>

                {error && <Error>{error}</Error>}
                <Button iconName='Delete' onClick={onDelete} />
                <Actions>
                    <Button
                        iconName='Download'
                        onClick={callbacks.onDownload}
                    />
                    <Button title='Save' primary onClick={onSave} />
                </Actions>
            </Header>
            <Content>
                <Column>
                    <VerticalTabs
                        selectedNodeId={selectedNodeId}
                        onSelectNode={onSelectNode}
                        nodes={nodes}
                    />
                    <IconButton iconName='Add' onClick={callbacks.onNew} />
                </Column>
                <Editors>
                    <Code
                        value={editorValue}
                        height={height}
                        language='json'
                        onChange={(value) => setEditorValue(value ?? '')}
                    />
                </Editors>
            </Content>
        </Wrapper>
    );
}

export default Datasets;
