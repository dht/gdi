import React from 'react';
import KeyboardShortcuts from '../KeyboardShortcuts/KeyboardShortcuts';
import { Wrapper } from './KeyboardHint.style';
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
        <Wrapper
            className='KeyboardHint-wrapper'
            data-testid='KeyboardHint-wrapper'
        >
            <Icon onClick={onToggle} iconName='KeyboardClassic' />
            {renderModal()}
        </Wrapper>
    );
}

export default KeyboardHint;
