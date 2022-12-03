import React, { useContext } from 'react';
import { Button, IconButton } from '@gdi/web-ui';
import Tools from '../Tools/Tools';
import { options as optionsFlex } from './TopBar.options.flex';
import { options as optionsReset } from './TopBar.options.reset';
import { Wrapper, H1, MindTheGap, ToggleView } from './TopBar.style';

export type TopBarProps = {
    header: string;
    children?: JSX.Element;
    callbacks: {
        onAction: (action: string) => void;
        onSeed: (whichId: string) => void;
        onFlexChange: (flex: number) => void;
    };
    flex?: number;
};

export function TopBar(props: TopBarProps) {
    const { header, callbacks, flex = 1 } = props;

    function onMenuClickFlex(option: any) {
        const flex = parseInt(option.id);
        callbacks.onFlexChange(flex);
    }

    function onMenuClickReset(option: any) {
        callbacks.onSeed(option.id);
    }

    function onClick(item: any) {
        switch (item.id) {
            case 'edit':
                callbacks.onAction('edit');
                break;
            case 'rotate':
                callbacks.onAction('rotate');
                break;
            case 'delete':
                callbacks.onAction('delete');
                break;
            case 'splitHorizontally':
                callbacks.onAction('splitHorizontally');
                break;
            case 'splitVertically':
                callbacks.onAction('splitVertically');
                break;
        }
    }

    function renderTools() {
        return (
            <>
                <H1 onDoubleClick={() => callbacks.onAction('renameLayout')}>
                    {header}
                </H1>
                <Tools onClick={onClick} />
                <ToggleView>
                    <IconButton
                        iconName='Back'
                        onClick={() => callbacks.onAction('back')}
                    />
                    <IconButton
                        iconName='ViewList'
                        onClick={() => callbacks.onAction('mode')}
                    />
                </ToggleView>

                <Button
                    title={String(flex)}
                    selectedOptionId={'1'}
                    onMenuClick={onMenuClickFlex}
                    options={optionsFlex}
                    tooltip='Change Flex'
                />

                <MindTheGap />

                <Button
                    iconName='Previous'
                    selectedOptionId={'1'}
                    onMenuClick={onMenuClickReset}
                    options={optionsReset}
                    tooltip='Reset structure'
                />
            </>
        );
    }

    return (
        <Wrapper className='TopBar-wrapper' data-testid='TopBar-wrapper'>
            {props.children}
            {renderTools()}
        </Wrapper>
    );
}

export default TopBar;
