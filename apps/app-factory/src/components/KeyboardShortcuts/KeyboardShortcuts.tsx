import React from 'react';
import { Container } from './KeyboardShortcuts.style';
import {
    Modal,
    Icon,
    KeyboardShortcuts as KeyboardShortcutsUI,
} from '@gdi/web-ui';
import { shortKeys } from './KeyboardShortcuts.items';
import { useToggle } from 'react-use';
import { useQuestionMark } from '@gdi/hooks';

export type KeyboardShortcutsProps = {};

export function KeyboardShortcuts(props: KeyboardShortcutsProps) {
    const [isOpen, toggle] = useToggle(false);

    useQuestionMark(() => {
        toggle();
    });

    function renderModal() {
        if (!isOpen) {
            return null;
        }

        return (
            <Modal open={isOpen} title='Keyboard Shortcuts' onClose={toggle}>
                <KeyboardShortcutsUI shortKeys={shortKeys} />
            </Modal>
        );
    }

    return (
        <Container
            className='KeyboardShortcuts-container'
            data-testid='KeyboardShortcuts-container'
        >
            <Icon onClick={toggle} iconName='KeyboardClassic' />
            {renderModal()}
        </Container>
    );
}

export default KeyboardShortcuts;
