import { Multi as MultiUI } from 'multi';
import { Wrapper } from './Multi.style';

export type MultiProps = {
  views: string[];
  callbacks: {
    onAction: (params: any) => void;
    onItemAction: (params: any) => void;
  };
  data: Json[];
  multi: any;
};

export function Multi(props: MultiProps) {
  const { views, multi, data, callbacks } = props;

  return (
    <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
      <MultiUI
        initialView={views[0]}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
      />
    </Wrapper>
  );
}

export default Multi;
