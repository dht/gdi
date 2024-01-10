import React from 'react';
import { Provider, createDispatchHook, createSelectorHook, createStoreHook } from 'react-redux';

const GdiContext: any = React.createContext(null);

export const useStore = createStoreHook(GdiContext);
export const useDispatch = createDispatchHook(GdiContext);
export const useSelector = createSelectorHook(GdiContext);

export const GdiProvider = (props: any) => {
  return (
    <Provider store={props.store} context={GdiContext}>
      {props.children}
    </Provider>
  );
};
