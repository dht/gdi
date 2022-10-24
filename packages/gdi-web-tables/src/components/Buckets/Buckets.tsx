import React, { useContext, useMemo, useState } from 'react';
import BucketTabs from '../BucketTabs/BucketTabs';
import { Container, Content } from './Buckets.style';
import { CrudContext } from '../../context/Crud.context';
import { getNewDataTagsByList, Trello, usePermutations } from '@gdi/dnd';
import { IBucketsConfig } from '../../types';

export type BucketsProps = {
    config: IBucketsConfig;
    data: Json[];
};

export function Buckets(props: BucketsProps) {
    const { config, data } = props;
    const { permutations, titleFieldId } = config;

    const [permutationId, setPermutationId] = useState<string>(
        permutations[0].id
    );
    const permutation = permutations.find((p) => p.id === permutationId);
    const buckets = permutation?.buckets ?? [];
    const scopedPermutationId = `${config.id}-${permutationId}`;

    const [lists, items] = usePermutations(
        config,
        permutations,
        permutationId,
        data
    );

    const crud = useContext(CrudContext);

    const callbacks = useMemo(
        () => ({
            onMove: (
                itemId: string,
                destinationListId: string,
                order: number
            ) => {
                const item = items[itemId];
                const bucketDestination = buckets.find(
                    (b) => b.id === destinationListId
                );

                if (!item || !bucketDestination) {
                    return;
                }

                const dataTags = getNewDataTagsByList(
                    scopedPermutationId,
                    item.dataTags ?? [],
                    buckets,
                    destinationListId
                );

                const orderPerBucket = {
                    [scopedPermutationId]: order,
                };

                crud.callbacks.onAction('editWithData', {
                    id: itemId,
                    dataTags,
                    order: orderPerBucket,
                });
            },
            onEdit: (itemId: string, value: string) => {
                crud.callbacks.onAction('editWithData', {
                    id: itemId,
                    [titleFieldId]: value,
                });
            },
            onNew: (listId: string, value: string, order: number) => {
                const orderPerPermutation = {
                    [scopedPermutationId]: order,
                };

                const dataTags = getNewDataTagsByList(
                    scopedPermutationId,
                    [],
                    buckets,
                    listId
                );

                crud.callbacks.onAction('newWithData', {
                    [titleFieldId]: value,
                    dataTags,
                    order: orderPerPermutation,
                });
            },
            onDelete: (itemId: string) => {
                return crud.callbacks.onItemAction(itemId, 'delete');
            },
            onEditList: (listId: string, newValue: string) => {},
        }),
        [permutation, items]
    );

    const options = useMemo(() => ({}), []);

    const tabs = useMemo(() => {
        return permutations.map((p) => ({
            id: p.id,
            text: p.title,
        }));
    }, [permutations]);

    function renderInner() {
        return (
            <Trello
                lists={lists}
                items={items}
                callbacks={callbacks}
                options={options}
            />
        );
    }

    return (
        <Container
            className='Buckets-container'
            data-testid='Buckets-container'
        >
            <Content>{renderInner()}</Content>
            <BucketTabs
                tabs={tabs}
                selectedTabId={permutationId}
                onSelect={(tabId) => setPermutationId(tabId)}
            />
        </Container>
    );
}

export default Buckets;
