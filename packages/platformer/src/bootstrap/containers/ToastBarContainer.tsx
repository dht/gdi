import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

type ToastBarContainerProps = {};

export function ToastBarContainer(_props: ToastBarContainerProps) {
    return (
        <StyledToastContainer
            position={toast.POSITION.BOTTOM_LEFT}
            style={{ zIndex: 1 }}
        />
    );
}

const StyledToastContainer = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        left: 70px;
    }
`;
