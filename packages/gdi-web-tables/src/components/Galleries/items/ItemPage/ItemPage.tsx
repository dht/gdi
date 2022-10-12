import { Icon } from '@gdi/web-base-ui';
import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';
import { Description, IconWrapper } from './ItemPage.style';

export type ItemPageProps = ItemBaseProps & {
    item: IPage;
};

export function ItemPage(props: ItemPageProps) {
    const { item: page } = props;
    const { iconName } = page;

    return (
        <ItemBase {...props}>
            <Description className='description'>
                <IconWrapper>
                    <Icon iconName={iconName} />
                </IconWrapper>
            </Description>
        </ItemBase>
    );
}

export default ItemPage;
