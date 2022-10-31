import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    font-size: 22px;
`;

export const Project = styled.div``;

export const TimeEstimate = styled.div`
    font-size: 26px;
    font-weight: 200;

    span {
        font-size: 15px;
        color: gray;
        ${(props) => props.theme.paddingLeft('6px')}
    }
`;

export const Summary = styled.div`
    font-size: 22px;
    color: gold;
`;
