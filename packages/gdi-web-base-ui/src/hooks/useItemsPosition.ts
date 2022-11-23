import { useEffect, useState } from 'react';

type Options = {
    width: number;
    itemsPerRow: number;
    itemHeight: number;
};

type ChangeType = 'move' | 'show' | 'hide' | 'none';

export function useItemsPosition(
    items: Json[],
    currentTag: string,
    options: Options
) {
    const { width, itemsPerRow, itemHeight } = options;
    const [positionedItems, setPositionedItems] = useState<Json[]>([]);

    useEffect(() => {
        setPositionedItems((state) => {
            const itemWidth = Math.floor(width / itemsPerRow);

            let index = 0;

            return items.map((item) => {
                const previousItem = state.find((i) => i.id === item.id);

                const isVisible =
                    item.tags.includes(currentTag) || currentTag === 'All';

                let change: ChangeType = 'none',
                    top = Math.floor(index / itemsPerRow) * itemHeight,
                    left = (index % itemsPerRow) * itemWidth;

                if (previousItem) {
                    const { isVisible: wasVisible } = previousItem;

                    if (!wasVisible && isVisible) {
                        change = 'show';
                    } else if (wasVisible && !isVisible) {
                        change = 'hide';
                        top = previousItem.position.top;
                        left = previousItem.position.left;
                    } else if (wasVisible && isVisible) {
                        change = 'move';
                    }
                }

                index += isVisible ? 1 : 0;

                const style = {
                    opacity: isVisible ? 1 : 0,
                    width: itemWidth + 'px',
                };

                const position = {
                    top,
                    left,
                };

                return {
                    ...item,
                    style,
                    position,
                    isVisible,
                };
            });
        });
    }, [items, currentTag, width]);

    return positionedItems;
}
