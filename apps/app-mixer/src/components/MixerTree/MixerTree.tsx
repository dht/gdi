import React, { useCallback, useContext, useRef, useState } from 'react';
import classnames from 'classnames';
import { Icon, IconButton, Toolbar, Panel } from '@gdi/web-ui';
import {
    Column,
    Wrapper,
    ContainerInstances,
    Info,
    Instance,
    InstanceCount,
    InstanceName,
    InstanceTitle,
    Content,
    Description,
    Toggle,
    Actions,
    DescriptionWrapper,
} from './MixerTree.style';
import { useLocalStorage } from 'react-use';

const localeStorageKey = 'MIXER_TREE_OPEN';

export type MixerTreeProps = {
    pageInstances: IPageInstance[];
    pageInstanceId?: string;
    selectedInstanceId?: string;
    instances: IWidgetInstance[];
    callbacks: {
        onClose: () => void;
        onPageInstanceChange: (
            id: string,
            change: Partial<IPageInstance>
        ) => void;
        onPageInstanceSelect: (pageInstanceId: string) => void;
        onCustomAction: (actionId: string, _data?: Json) => void;
    };
};

export function MixerTree(props: MixerTreeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const refVersion = useRef<HTMLDivElement>(null);
    const refDescription = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useLocalStorage(localeStorageKey, true);
    const { pageInstances, pageInstanceId, instances, callbacks } = props;

    const pageInstance = Object.values(pageInstances).find(
        (res: IPageInstance) => res.id === pageInstanceId
    );

    const toggleOpen = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    function onVersionChange() {
        if (!pageInstance) {
            return null;
        }

        if (refVersion.current) {
            callbacks.onPageInstanceChange(pageInstance.id, {
                version: refVersion.current.innerText,
            });
        }
    }

    function onDescriptionChange() {
        if (!pageInstance) {
            return null;
        }

        if (refDescription.current) {
            callbacks.onPageInstanceChange(pageInstance.id, {
                description: refDescription.current.innerText,
            });
        }
    }

    function renderDescription() {
        if (!pageInstance) {
            return null;
        }

        const { description } = pageInstance;

        return (
            <DescriptionWrapper>
                <InstanceTitle
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={onVersionChange}
                    ref={refVersion}
                    data-ph='title'
                >
                    {pageInstance.version}
                </InstanceTitle>
                <Description
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={onDescriptionChange}
                    ref={refDescription}
                    data-ph='description'
                >
                    {description}
                </Description>
            </DescriptionWrapper>
        );
    }

    function renderInstanceInfo() {
        if (!pageInstance) {
            return null;
        }

        return (
            <Info>
                <InstanceCount>{instances.length} elements</InstanceCount>
                <Actions>
                    <Toolbar
                        horizontal
                        items={tools}
                        onClick={(tool) => callbacks.onCustomAction(tool.id)}
                    />
                </Actions>
            </Info>
        );
    }

    const className = classnames('MixerTree-wrapper', {
        open: isOpen,
    });

    return (
        <Panel
            transparent
            id='versions'
            title='Versions'
            onClose={callbacks.onClose}
        >
            <Wrapper className={className} data-testid='MixerTree-wrapper'>
                <Content className='content'>
                    <Column className='column'>
                        {renderDescription()}
                        {renderInstanceInfo()}
                    </Column>
                    <PageInstances
                        pageInstances={pageInstances}
                        currentPageInstanceId={pageInstanceId}
                        onClick={(pageInstance) =>
                            callbacks.onPageInstanceSelect(pageInstance.id)
                        }
                    />
                </Content>
                <Toggle onClick={toggleOpen}>
                    <Icon className='toggle-icon' iconName='chevronLeft' />
                </Toggle>
            </Wrapper>
        </Panel>
    );
}

type PageInstancesProps = {
    pageInstances: IPageInstance[];
    currentPageInstanceId?: string;
    onHover?: (pageInstance: IPageInstance) => void;
    onClick: (pageInstance: IPageInstance) => void;
};

export const PageInstances = (props: PageInstancesProps) => {
    const { pageInstances, currentPageInstanceId } = props;

    function renderPageInstance(pageInstance: IPageInstance) {
        const { id } = pageInstance;

        const isPromoted = false;

        const className = classnames('resolution', {
            selected: id === currentPageInstanceId,
        });

        return (
            <Instance
                key={pageInstance.id}
                className={className}
                onTouchStart={() => props.onClick(pageInstance)}
                onClick={() => props.onClick(pageInstance)}
            >
                <InstanceName>
                    {pageInstance.version}
                    {isPromoted && (
                        <Icon className='star' iconName='FavoriteStarFill' />
                    )}
                </InstanceName>
            </Instance>
        );
    }

    function renderInstances() {
        return Object.values(pageInstances).map((pageInstance: IPageInstance) =>
            renderPageInstance(pageInstance)
        );
    }
    return <ContainerInstances>{renderInstances()}</ContainerInstances>;
};

const tools: IOption[] = [
    {
        id: 'duplicateVersion',
        text: 'Duplicate version',
        iconName: 'Copy',
    },
    {
        id: 'promoteVersion',
        text: 'Promote version',
        iconName: 'DoubleChevronUp8',
    },
    {
        id: 'gap',
        text: '',
        isGap: true,
    },
    {
        id: 'resetVersion',
        text: 'Reset version',
        iconName: 'Previous',
    },
    {
        id: 'deleteVersion',
        text: 'Delete version',
        iconName: 'Delete',
    },
];

export default MixerTree;
