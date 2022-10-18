import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: fixed;
    right: 14px;
    bottom: 80px;
    background-color: green;
    padding: 3px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 0 0 10px 10px;
    padding: 3px 20px 5px;
    transform: translateX(50%) rotate(90deg);
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
        180deg,
        #00ff0066 0%,
        #22aa33ff 20%,
        #22aa33ff 90%,
        #00ff0067 100%
    );
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #109610;
        font-weight: 600;
    }

    &:active {
        right: 15px;
        bottom: 81px;
    }
`;
