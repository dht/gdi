import React, { useContext, useMemo, useState } from 'react';
import BucketTabs from '../BucketTabs/BucketTabs';
import { Container, Content } from './Buckets.style';
import { IBucketsConfig } from '../../Trello.types';
import { SelectionContext } from '../../_context/Selection.context';
import { usePermutations } from '../../_hooks';
import { getNewDataTagsByList } from '../../_utils/lists';
import { Trello } from '../Trello/Trello';
import { Json } from '../../../../types';

export type BucketsProps = {
  config: IBucketsConfig;
  data: Json[];
  callbacks: {
    onAction: (actionId: string, data?: Json) => void;
    onItemAction: (id: string, action: any, data?: Json) => void;
  };
};

export function Buckets(props: BucketsProps) {
  const { config, data } = props;

  const { permutations = [], titleFieldId } = config;

  const contextSelection = useContext(SelectionContext);

  const firstPermutation = permutations[0] || {};

  const [permutationId, setPermutationId] = useState<string>(firstPermutation.id);

  const permutation = permutations.find((p) => p.id === permutationId);
  const buckets = permutation?.buckets ?? [];
  const scopedPermutationId = `${config.id}-${permutationId}`;

  const [lists, items] = usePermutations(config, permutations, permutationId, data);

  const callbacks = useMemo(
    () => ({
      onMove: (itemId: string, destinationListId: string, order: number) => {
        const item = items[itemId];
        const bucketDestination = buckets.find((b) => b.id === destinationListId);

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

        props.callbacks.onAction('editWithData', {
          id: itemId,
          dataTags,
          order: orderPerBucket,
        });
      },
      onEdit: (itemId: string, value: string) => {
        props.callbacks.onAction('editWithData', {
          id: itemId,
          [titleFieldId]: value,
        });
      },
      onNew: (listId: string, value: string, order: number) => {
        const orderPerPermutation = {
          [scopedPermutationId]: order,
        };

        const dataTags = getNewDataTagsByList(scopedPermutationId, [], buckets, listId);

        props.callbacks.onAction('newWithData', {
          [titleFieldId]: value,
          dataTags,
          order: orderPerPermutation,
        });
      },
      onDelete: (itemId: string) => {
        return props.callbacks.onItemAction(itemId, 'delete');
      },
      onEditList: (listId: string, newValue: string) => {},
      onSelect: (itemId: string) => {
        contextSelection.callbacks.onSelect(itemId);
      },
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
    return <Trello lists={lists} items={items} callbacks={callbacks} options={options} />;
  }

  return (
    <Container className='Buckets-container' data-testid='Buckets-container'>
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
