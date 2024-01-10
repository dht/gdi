import { useDispatch } from '@gdi/store-base';
import { useMemo } from 'react';
import Multi from './Multi';

export type MultiContainerProps = {
  multiUrl: string;
  dataUrl: string;
  multi: any;
  data: any;
};

export function MultiContainer(props: MultiContainerProps) {
  const { multi } = props;
  const dispatch = useDispatch();

  const views = useMemo(() => {
    return Object.keys(multi);
  }, []);

  const data = useMemo(() => {
    let output = props.data;

    if (!Array.isArray(output)) {
      output = Object.values(output);
    }

    return output.filter((i: any) => i.isEnabled);
  }, [props.data]);

  const callbacks = useMemo(
    () => ({
      onAction: (params: any) => {},
      onItemAction: (params: any) => {
        const { verb, item } = params;
        const { url } = item;

        switch (verb) {
          case 'click':
            dispatch({ type: 'NAVIGATE', to: url });
            break;
        }
      },
    }),
    []
  );

  return <Multi views={views} data={data} callbacks={callbacks} multi={multi} />;
}

export default MultiContainer;
