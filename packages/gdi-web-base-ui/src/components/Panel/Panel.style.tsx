import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    border: 1px solid #334;
    position: absolute;
    top: 100px;
    ${(props) => props.theme.right('200px')}
    border-radius: 4px;
    background-color: rgba(10, 10, 20, 0.9);
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #aab;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
`;

export const Title = styled.div`
    flex: 1;
    font-size: 16px;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    i {
        cursor: pointer;
        font-size: 16px;

        &:hover {
            color: gold;
        }
    }
`;
