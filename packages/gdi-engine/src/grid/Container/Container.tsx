import React from 'react';
import { Wrapper, WrapperInfo } from './Container.style';
import classnames from 'classnames';
import { useTheme } from 'styled-components';

export type ContainerProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

export function Container(props: ContainerProps) {
    const theme: any = useTheme();

    const className = classnames(
        'wrapper',
        props.className,
        theme.bpId(),
        theme.bpMaxId()
    );

    return (
        <Wrapper className={className} data-testid='Container-wrapper'>
            {props.children}
            <ContainerInfo />
        </Wrapper>
    );
}

function ContainerInfo() {
    return <WrapperInfo />;
}

export default Container;
