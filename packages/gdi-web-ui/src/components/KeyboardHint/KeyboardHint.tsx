import React from 'react';
import KeyboardShortcuts from '../KeyboardShortcuts/KeyboardShortcuts';
import { Container } from './KeyboardHint.style';
import { Icon, Modal } from '@gdi/web-base-ui';
import { useToggle } from 'react-use';

export type KeyboardHintProps = {
    shortKeys: IShortKey[];
};

export function KeyboardHint(props: KeyboardHintProps) {
    const { shortKeys } = props;
    const [isOpen, onToggle] = useToggle(false);

    function renderModal() {
        if (!isOpen) {
            return null;
        }

        return (
            <Modal open={isOpen} title='Keyboard Shortcuts' onClose={onToggle}>
                <KeyboardShortcuts shortKeys={shortKeys} />
            </Modal>
        );
    }

    return (
        <Container
            className='KeyboardHint-container'
            data-testid='KeyboardHint-container'
        >
            <Icon onClick={onToggle} iconName='KeyboardClassic' />
            {renderModal()}
        </Container>
    );
}

export default KeyboardHint;
