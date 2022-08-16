import React from 'react';
import { Container } from './Login.style';

export type LoginProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export function Login(props: LoginProps) {
    const { title } = props;

    return (
        <Container
            className="Login-container"
            data-testid="Login-container"
            onClick={props.onClick}
        >
            {title}
        </Container>
    );
}

export default Login;
