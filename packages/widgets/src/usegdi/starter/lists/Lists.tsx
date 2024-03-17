import React from 'react';
import { Wrapper } from './Lists.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import ListsSummary from './_parts/ListsSummary/ListsSummary.container';

export type ListsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Lists(props: ListsProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Lists-wrapper' data-testid='Lists-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <ListsSummary />
      </Multi>
    </Wrapper>
  );
}

export default Lists;
