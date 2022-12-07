import React, { useState } from 'react';
import Button from '../Button/Button';
import ColorfulHeader from '../ColorfulHeader/ColorfulHeader';
import Modal from '../Modal/Modal';
import triangleColors from '../Triangles/Triangles.colors';
import { useCustomEvent } from '@gdi/hooks';
import {
    Action,
    Actions,
    Column,
    Content,
    H1,
    H3,
    Li,
    P,
    Row,
    Ul,
    Warning,
    Wrapper,
} from './DemoMode.style';

export type DemoModeProps = {};

export function DemoMode(_props: DemoModeProps) {
    const [showModal, setShowModal] = useState(false);

    useCustomEvent('SHOW_PLAYGROUND_MODAL', () => {
        setShowModal(true);
    });

    function renderModal() {
        return (
            <Modal
                title='Playground Mode'
                onClose={() => setShowModal(false)}
                open={showModal}
            >
                <Content>
                    <H1>
                        <ColorfulHeader palette={triangleColors.YlOrBr}>
                            ---==== Playground Mode ====---
                        </ColorfulHeader>
                    </H1>
                    <P>
                        Welcome to GDI's Playground Mode where you can try out
                        the AdminUI.
                    </P>
                    <Row>
                        <Column>
                            <H3>You can</H3>
                            <Ul>
                                <Li>Make changes*</Li>
                                <Li>Use the apps</Li>
                                <Li>Import/export</Li>
                            </Ul>
                        </Column>
                        <Column>
                            <H3>
                                You <span>cannot</span>
                            </H3>
                            <Ul>
                                <Li>Upload images</Li>
                                <Li>Publish the site</Li>
                            </Ul>
                        </Column>
                    </Row>
                    <Warning>
                        Please note that any changes you make are saved on the
                        LocalStorage and should not be relied upon. Use this
                        mode only to explore the AdminUI.
                    </Warning>
                </Content>
                <Actions>
                    <Action>
                        <Button
                            title='Start Playing'
                            primary
                            onClick={() => setShowModal(false)}
                        />
                    </Action>
                </Actions>
            </Modal>
        );
    }

    return (
        <>
            <Wrapper
                className='DemoMode-wrapper'
                data-testid='DemoMode-wrapper'
                onClick={() => setShowModal(true)}
            >
                Playground
            </Wrapper>
            {renderModal()}
        </>
    );
}

export default DemoMode;
