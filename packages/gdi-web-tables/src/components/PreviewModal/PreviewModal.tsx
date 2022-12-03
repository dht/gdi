import React, { useContext } from 'react';
import { Wrapper } from './PreviewModal.style';
import { Empty, Panel } from '@gdi/web-base-ui';
import { previews } from './preview';
import { SelectionContext } from '../../context/Selection.context';

export type PreviewModalProps = {
    id: string;
    itemType: ItemType;
    data: Json[];
    onClose: () => void;
};

export function PreviewModal(props: PreviewModalProps) {
    const { id, itemType, data } = props;

    const { state } = useContext(SelectionContext);

    const item = data.find((i) => i.id === state[0]);

    function renderInner() {
        if (!item) {
            return (
                <Empty
                    iconName='EntryView'
                    message='No preview'
                    withIcon={true}
                />
            );
        }
        const Cmp = previews[itemType];

        return <Cmp item={item} />;
    }

    return (
        <Panel title='preview' id={id} onClose={props.onClose}>
            <Wrapper
                className='PreviewModal-wrapper'
                data-testid='PreviewModal-wrapper'
            >
                {renderInner()}
            </Wrapper>
        </Panel>
    );
}

export default PreviewModal;
