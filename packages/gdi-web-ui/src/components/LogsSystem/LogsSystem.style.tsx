import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.7);
    background-color: #223;
    top: 100px;
    left: 100px;
    height: 700px;
    width: 420px;
`;

export const Header = styled.div`
    background-color: #223;
    padding: 5px 10px;
    color: rgba(255, 255, 255, 0.3);
`;
