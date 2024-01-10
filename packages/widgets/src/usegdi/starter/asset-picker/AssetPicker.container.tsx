import { IAsset, selectors, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { ItemPicker } from '@gdi/ui';
import AssetPreview from '../asset-preview/AssetPreview';

export type AssetPickerContainerProps = {
  contentType: string | string[];
  onCta: (asset: Json) => void;
  onCancel: () => void;
};

export function AssetPickerContainer(props: AssetPickerContainerProps) {
  const { contentType } = props;
  const assets = useSelector(selectors.assets.$assets);

  const items = useMemo(() => {
    const contentTypeArr = Array.isArray(contentType) ? contentType : [contentType];

    return assets.filter((asset: any) => {
      const okType = contentTypeArr.includes(asset.contentType);
      const okProject = asset.isCurrentProject;
      return okType && okProject;
    });
  }, [assets, contentType]);

  function renderPreview(asset?: IAsset) {
    if (!asset) return null;
    return <AssetPreview asset={asset as IAsset} />;
  }

  return <ItemPicker sizeUnits='bytes' items={items} renderPreview={renderPreview} {...props} />;
}

export default AssetPickerContainer;
