import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    ${(props) => props.theme.marginLeft('-200px')}
    width: 400px;
    padding: 6px 20px;
    text-align: center;
    box-shadow: 0 3px 10px 5px rgba(0, 0, 0, 0.2);
    background-color: #334;
    background-color: dodgerblue;
    border-radius: 0 0 15px 15px;
    font-size: 16px;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.div`
    flex: 1;
    ${(props) => props.theme.marginLeft('40px')}
`;

export const Actions = styled.div`
    width: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    i {
        cursor: pointer;

        &:hover {
            color: gold;
        }

        &:active {
            position: relative;
            bottom: 1px;
            ${(props) => props.theme.left('1px')}
        }
    }
`;
