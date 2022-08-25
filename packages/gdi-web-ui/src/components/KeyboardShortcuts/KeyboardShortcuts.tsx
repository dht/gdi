import React from 'react';
import { IShortKey } from '@gdi/platformer';
import {
    Container,
    Key,
    KeyContainer,
    Modifier,
    Combination,
    Plus,
    Description,
} from './KeyboardShortcuts.style';

export type KeyboardShortcutsProps = {
    shortKeys: IShortKey[];
};

export function KeyboardShortcuts(props: KeyboardShortcutsProps) {
    const { shortKeys } = props;

    function renderKey(shortKey: IShortKey, index: number) {
        const { withCtrl, withShift, withCommand, withAlt, key, description } =
            shortKey;

        // ⊞

        return (
            <KeyContainer key={index} className='key'>
                <Combination>
                    {withCtrl && (
                        <Modifier>
                            Ctrl<Plus>+</Plus>
                        </Modifier>
                    )}
                    {withAlt && (
                        <Modifier>
                            ⌥<Plus>+</Plus>
                        </Modifier>
                    )}
                    {withShift && (
                        <Modifier>
                            ⇧<Plus>+</Plus>
                        </Modifier>
                    )}
                    {withCommand && (
                        <Modifier>
                            ⌘<Plus>+</Plus>
                        </Modifier>
                    )}
                    <Key>{key}</Key>
                </Combination>
                <Description>{description}</Description>
            </KeyContainer>
        );
    }

    function renderKeys() {
        return shortKeys.map((key: IShortKey, index) => renderKey(key, index));
    }

    return (
        <Container
            className='KeyboardShortcuts-container'
            data-testid='KeyboardShortcuts-container'
        >
            {renderKeys()}
        </Container>
    );
}

export default KeyboardShortcuts;
