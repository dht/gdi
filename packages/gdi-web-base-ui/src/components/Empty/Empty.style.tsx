import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #ccd;
`;

export const Message = styled.div`
    margin-top: 5px;
    font-size: 24px;
    font-weight: 100;
`;

export const Actions = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: row;
    animation: fadeIn 0.5s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    opacity: 0;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Action = styled.div`
    margin: 0 5px;
`;
