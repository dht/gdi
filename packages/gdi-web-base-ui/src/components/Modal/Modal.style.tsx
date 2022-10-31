import styled from 'styled-components';

export const Container = styled.div`
    .ms-Modal-scrollableContent {
        overflow-y: visible;
    }
`;

export const Header = styled.div`
    flex: 1;
    display: flex;
    height: 40px;
    line-height: 30px;
    border-bottom: 1px solid #112;
`;

export const Title = styled.div`
    flex: 1;
    color: #aaa;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 400;
`;

export const HeaderActions = styled.div`
    width: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;

        &:hover {
            color: gold;
        }

        &:active {
            bottom: 1px;
            ${(props) => props.theme.left('1px')}
            position: relative;
        }
    }
`;

export const Content = styled.div`
    padding: 5px 10px;
`;
