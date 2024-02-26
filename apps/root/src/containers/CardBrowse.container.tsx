import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { CardBrowse } from '@gdi/ui';

export type CardBrowseContainerProps = {};

export function CardBrowseContainer(_props: CardBrowseContainerProps) {
  const dispatch = useDispatch();

  const callbacks = useMemo(
    () => ({
      onClick: () => {
        dispatch({
          type: 'NAVIGATE',
          to: '/browse',
        });
      },
    }),
    []
  );

  return <CardBrowse callbacks={callbacks} />;
}

export default CardBrowseContainer;
