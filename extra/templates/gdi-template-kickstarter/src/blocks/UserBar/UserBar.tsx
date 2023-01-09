import React from 'react';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import MenuIcons from '../../components/MenuIcons/MenuIcons';
import MenuLinks from '../../components/MenuLinks/MenuLinks';
import { Container, Flex, Row, Wrapper } from './UserBar.style';

export type UserBarProps = {};

export function UserBar(_props: UserBarProps) {
    return (
        <Wrapper className='UserBar-wrapper' data-testid='UserBar-wrapper'>
            <Container>
                <Row>
                    <Logo height={30} />
                    <MenuLinks />
                    <Flex />
                    <MenuIcons />
                </Row>
            </Container>
        </Wrapper>
    );
}

export default UserBar;
