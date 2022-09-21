import React, { CSSProperties, useRef } from 'react';
import { Container, MenuButton } from './EditorMenuPanel.style';
import classnames from 'classnames';
import Draggable from 'react-draggable';
import { Editor } from '@tiptap/react';
import { IEditorAction } from '../../types';

export type EditorMenuPanelProps = {
    editor: Editor;
    barActions: IEditorAction[];
    onExternalAction?: (action: IEditorAction) => void;
};

export function EditorMenuPanel(props: EditorMenuPanelProps) {
    const ref = useRef(null);

    const { editor, barActions } = props;

    if (!editor) {
        return null;
    }

    function onAction(action: IEditorAction) {
        const { command, commandParams } = action;

        if (!command) {
            if (props.onExternalAction) {
                props.onExternalAction(action);
            }
            return;
        }

        const chainedCommand: any = editor.chain().focus();
        const method = chainedCommand[command];

        if (typeof method !== 'function') {
            console.warn('could not find editor method for action', action);
            return;
        }
        method(commandParams).run();
    }

    function renderAction(action: IEditorAction) {
        const {
            id,
            isActiveParams,
            noActiveState,
            iconName,
            title = action.id,
        } = action;

        let isActive = false;

        let style: CSSProperties = {};

        if (!iconName && title.length > 2) {
            style.minWidth = '85px';
        }

        if (!noActiveState) {
            isActive = editor.isActive(id, isActiveParams);
        }

        const className = classnames('action', {
            isActive,
        });

        const inner = iconName ? (
            <i className='material-icons'>{iconName}</i>
        ) : (
            title
        );

        return (
            <MenuButton
                key={action.id}
                className={className}
                style={style}
                onClick={() => onAction(action)}
            >
                {inner}
            </MenuButton>
        );
    }

    function renderActions() {
        return barActions.map((action: IEditorAction) => renderAction(action));
    }

    return (
        <Draggable nodeRef={ref}>
            <Container
                ref={ref}
                className='EditorMenuPanel-container'
                data-testid='EditorMenuPanel-container'
            >
                {renderActions()}
            </Container>
        </Draggable>
    );
}

export default EditorMenuPanel;
