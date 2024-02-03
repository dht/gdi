import React, { useState } from 'react';
import { Actions, Cta, Field, Item, Items, Name, Preview, Size, Wrapper } from './ItemPicker.style';
import bytes from 'bytes';
import { format } from '../../utils';
import classnames from 'classnames';

export type ItemPickerProps = {
  items: Json[];
  contentType: string | string[];
  onCta: (item: Json) => void;
  onCancel: () => void;
  children?: React.ReactNode;
  renderPreview?: (item?: any) => React.ReactNode;
  sizeUnits: 'bytes' | 'duration';
};

export function ItemPicker(props: ItemPickerProps) {
  const { items, sizeUnits } = props;
  const [item, setItem] = useState<Json>();

  const hasPreviewComponent = typeof props.renderPreview === 'function';

  function onPreview(ev: any, asset: Json) {
    ev.stopPropagation();
    setItem(asset);
  }

  function renderSize(size: number) {
    const text = sizeUnits === 'duration' ? format.date.durationMillis(size) : bytes(size);
    return <Size>{text}</Size>;
  }

  function renderItem(item: Json) {
    const { name, size } = item;

    return (
      <Item key={item.id} className='item' onClick={() => props.onCta(item)}>
        <Field>
          <Name>{name}</Name>
          {renderSize(size)}
        </Field>
        <Actions>
          {hasPreviewComponent && <Cta onClick={(ev) => onPreview(ev, item)}>Preview</Cta>}
        </Actions>
      </Item>
    );
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  function renderPreview() {
    if (!hasPreviewComponent || !props.renderPreview) {
      return null;
    }

    return <Preview>{props.renderPreview(item)}</Preview>;
  }

  const className = classnames('ItemPicker-wrapper', {
    narrow: !hasPreviewComponent,
  });

  return (
    <Wrapper className={className} data-testid='ItemPicker-wrapper'>
      <Items>{renderItems()}</Items>
      {renderPreview()}
    </Wrapper>
  );
}

export default ItemPicker;
