import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

type ToastBarContainerProps = {};

export function Toast(_props: ToastBarContainerProps) {
    return (
        <StyledToastContainer
            position={toast.POSITION.BOTTOM_LEFT}
            style={{ zIndex: 1 }}
        />
    );
}

const StyledToastContainer = styled(ToastContainer)`
    ${(props) => props.theme.left('80px')}
`;
