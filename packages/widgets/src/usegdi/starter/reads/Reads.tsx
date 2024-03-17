import React from 'react';
import { Wrapper } from './Reads.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import ReadsSummary from './_parts/ReadsSummary/ReadsSummary.container';

export type ReadsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Reads(props: ReadsProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Reads-wrapper' data-testid='Reads-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <ReadsSummary />
      </Multi>
    </Wrapper>
  );
}

export default Reads;
