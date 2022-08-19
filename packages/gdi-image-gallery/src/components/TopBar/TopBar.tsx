import { Button, Search, Tag } from '@gdi/web-ui';
import React from 'react';
import Tools from '../Tools/Tools';
import Views from '../Views/Views';
import { Container, Flex } from './TopBar.style';

export type TopBarProps = {};

export function TopBar(_props: TopBarProps) {
    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            <Button title='Upload Image' iconName='Add' primary></Button>
            <Tools />
            <Tag
                tag='good'
                color='cyan'
                onClick={() => {}}
                onDelete={() => {}}
            />
            <Views />
            <Search width={300} />
        </Container>
    );
}

export default TopBar;
