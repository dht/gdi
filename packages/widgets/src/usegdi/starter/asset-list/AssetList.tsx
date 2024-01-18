import { IAsset } from '@gdi/store-base';
import { List } from '@gdi/ui';
import { columns } from './AssetList.data';
import { Wrapper } from './AssetList.style';
import AssetBottom from './_parts/AssetBottom/AssetBottom';

export type AssetListProps = {
  assets: IAsset[];
  isFocused: boolean;
  callbacks: {
    onClick: () => void;
    onDrillDown: (asset: IAsset) => void;
    onDrillUp: () => void;
    onPreview: (asset: IAsset) => void;
    onFunctionKey: (asset: Json, key: string, ev: any) => void;
  };
  root: string;
};

export function AssetList(props: AssetListProps) {
  const { root, assets, isFocused, callbacks } = props;

  function renderActions(callbacks: any) {
    return <AssetBottom onAction={callbacks.onAction} />;
  }

  return (
    <Wrapper
      className='AssetList-wrapper'
      data-testid='AssetList-wrapper'
      onMouseDown={callbacks.onClick}
    >
      <List
        root={root}
        data={assets}
        isFocused={isFocused}
        onDrillDown={callbacks.onDrillDown}
        onDrillUp={callbacks.onDrillUp}
        onPreview={callbacks.onPreview}
        onFunctionKey={callbacks.onFunctionKey}
        columns={columns}
        renderActions={renderActions}
      />
    </Wrapper>
  );
}

export default AssetList;
