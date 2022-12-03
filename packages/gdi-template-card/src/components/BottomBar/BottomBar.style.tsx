import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    min-height: 60px;
    justify-content: space-between;
    margin: 0 20px;
    border-radius: 10px;
    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const WrappedButton = styled.div`
    color: white;
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 25px;
    }
`;
