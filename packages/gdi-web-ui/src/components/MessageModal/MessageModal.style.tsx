import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => props.theme.padding('50px 50px 50px 40px')}
`;

export const Text = styled.div`
    max-width: 360px;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${(props) => props.theme.marginRight('40px')}

    i {
        font-size: 80px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    line-height: 26px;
    color: #fff;
`;

export const Paragraph = styled.div`
    margin-top: 8px;
    font-size: 18px;
    line-height: 27px;
    color: #99c;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    padding: 10px;
`;
