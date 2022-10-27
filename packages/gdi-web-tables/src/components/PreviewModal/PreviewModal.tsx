import React, { useContext, useRef } from 'react';
import { Container } from './PreviewModal.style';
import { Empty, Icon, Panel } from '@gdi/web-ui';
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
            <Container
                className='PreviewModal-container'
                data-testid='PreviewModal-container'
            >
                {renderInner()}
            </Container>
        </Panel>
    );
}

export default PreviewModal;
