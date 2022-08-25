import React from 'react';
import { Container } from './KeyboardShortcuts.style';
import {
    Modal,
    Icon,
    KeyboardShortcuts as KeyboardShortcutsUI,
} from '@gdi/web-ui';
import { shortKeys } from './KeyboardShortcuts.items';

export type KeyboardShortcutsProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export function KeyboardShortcuts(props: KeyboardShortcutsProps) {
    const { isOpen } = props;

    function renderModal() {
        if (!isOpen) {
            return null;
        }

        return (
            <Modal
                open={isOpen}
                title='Keyboard Shortcuts'
                onClose={props.onToggle}
            >
                <KeyboardShortcutsUI shortKeys={shortKeys} />
            </Modal>
        );
    }

    return (
        <Container
            className='KeyboardShortcuts-container'
            data-testid='KeyboardShortcuts-container'
        >
            <Icon onClick={props.onToggle} iconName='KeyboardClassic' />
            {renderModal()}
        </Container>
    );
}

export default KeyboardShortcuts;
