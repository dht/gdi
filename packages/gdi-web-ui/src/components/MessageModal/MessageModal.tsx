import React from 'react';
import { Modal } from '@gdi/web-base-ui';
import { Button, Checkbox, Icon } from '@gdi/web-base-ui';
import { useLocalStorage, useToggle } from 'react-use';
import {
    Actions,
    Wrapper,
    Content,
    Text,
    IconWrapper,
    Title,
    Paragraph,
} from './MessageModal.style';

export type MessageModalProps = {
    id: string;
    title: string;
    iconName: string;
    children: string;
    onClose: () => void;
    open: boolean;
    modalHeader: string;
};

export function MessageModal(props: MessageModalProps) {
    const { id, modalHeader: header, iconName, open, title } = props;
    const [checkbox, toggleCheckbox] = useToggle(false);
    const [forceClose, setForceClose] = useLocalStorage(
        `MESSAGE_MODAL_FORCE_CLOSE${id}`,
        false
    );

    function onClose() {
        if (checkbox) {
            setForceClose(true);
        }
        props.onClose();
    }

    if (forceClose || !open) {
        return null;
    }

    return (
        <Modal open={true} onClose={props.onClose} title={header}>
            <Wrapper
                className='MessageModal-wrapper'
                data-testid='MessageModal-wrapper'
            >
                <Content>
                    <IconWrapper>
                        <Icon iconName={iconName} />
                    </IconWrapper>
                    <Text>
                        <Title>{title}</Title>
                        <Paragraph>{props.children}</Paragraph>
                    </Text>
                </Content>
                <Actions>
                    <Checkbox
                        label={`Don't show again`}
                        onChange={toggleCheckbox}
                    />
                    <Button
                        onClick={onClose}
                        primary
                        title='Ok, I understand'
                    />
                </Actions>
            </Wrapper>
        </Modal>
    );
}

export default MessageModal;
