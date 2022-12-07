import React, { useMemo, useState } from 'react';
import { allColors, Button, Empty, Icon, Modal } from '@gdi/web-base-ui';
import { Code } from '@gdi/web-editors';
import { downloadJson, isEmpty } from 'shared-base';
import { VerticalTabs } from '@gdi/web-tables';
import {
    Action,
    Actions,
    Column,
    Content,
    Editors,
    EmptyContainer,
    Wrapper,
} from './JsonViewer.style';
import { useMount } from 'react-use';

export type JsonViewerProps = {
    json: Json;
    showActions?: boolean;
};

export function JsonViewer(props: JsonViewerProps) {
    const { json = {}, showActions = true } = props;
    const [selectedNodeId, setSelectedNodeId] = useState<string>('');

    const nodes = Object.keys(json)
        .sort()
        .map((key, index) => {
            const color = allColors[index];

            return {
                id: key,
                store: '',
                nodeType: '',
                fieldTypes: {},
                color,
            };
        });

    useMount(() => {
        const firstKey = Object.keys(json).sort()[0];
        setSelectedNodeId(firstKey);
    });

    const editorValue = useMemo(() => {
        const value = (json as Json)[selectedNodeId];
        return JSON.stringify(value, null, 4);
    }, [selectedNodeId, json]);

    const height = 790;

    function renderEditor() {
        if (isEmpty(json)) {
            return (
                <EmptyContainer>
                    <Empty message='Empty JSON' withIcon iconName='Database' />
                </EmptyContainer>
            );
        }

        return (
            <Editors>
                <Code
                    value={editorValue}
                    height={height}
                    language='json'
                    hideLineNumbers={false}
                    onChange={() => {}}
                />
            </Editors>
        );
    }

    function download() {
        downloadJson('localData.json', json);
    }

    function renderActions() {
        if (!showActions) {
            return null;
        }

        return (
            <Actions>
                <Action onClick={download}>
                    <Icon iconName='Download' />
                </Action>
            </Actions>
        );
    }

    return (
        <Wrapper
            className='JsonViewer-wrapper'
            data-testid='JsonViewer-wrapper'
        >
            <Content>
                <Column>
                    <VerticalTabs
                        selectedNodeId={selectedNodeId}
                        onSelectNode={(value) => setSelectedNodeId(value)}
                        nodes={nodes}
                    />
                </Column>
                {renderEditor()}
            </Content>
            {renderActions()}
        </Wrapper>
    );
}

export default JsonViewer;
