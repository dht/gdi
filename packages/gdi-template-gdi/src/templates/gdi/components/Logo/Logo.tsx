import React from 'react';
import { Container } from './Logo.style';

export type LogoProps = {
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function Logo(props: LogoProps) {
    return (
        <Container
            className='Logo-container'
            data-testid='Logo-container'
            onClick={props.onClick}
            src='https://cdn.greeninvoice.co.il/public-website/assets/1.0.473/img/3fc8fc0.svg'
        ></Container>
    );
}

export default Logo;
