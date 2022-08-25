import React from 'react';
import { KeyboardShortcuts } from '../../components/KeyboardShortcuts/KeyboardShortcuts';
import { useToggle } from 'react-use';

export const KeyboardShortcutsContainer = () => {
    const [isOpen, toggle] = useToggle(false);

    return <KeyboardShortcuts isOpen={isOpen} onToggle={toggle} />;
};
