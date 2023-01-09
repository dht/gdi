import React from 'react';
import { A, Li, Ul, Wrapper } from './MenuLinks.style';

export type MenuLinksProps = {};

export function MenuLinks(_props: MenuLinksProps) {
    return (
        <Wrapper className='MenuLinks-wrapper' data-testid='MenuLinks-wrapper'>
            <Ul>
                <Li>
                    <A href='#home'>Customers ❤️</A>
                </Li>
                <Li>
                    <A href='#home'>Movement</A>
                </Li>
                <Li>
                    <A href='#home'>Diary</A>
                </Li>
                <Li>
                    <A href='#home'>Contact</A>
                </Li>
            </Ul>
        </Wrapper>
    );
}

export default MenuLinks;
