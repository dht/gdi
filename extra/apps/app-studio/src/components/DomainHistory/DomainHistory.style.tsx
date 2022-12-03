import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    border-radius: 15px;
`;

export const Item = styled.div<{ highlighted: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => (props.highlighted ? 'gold' : '#556')};
`;

export const Time = styled.div`
    width: 60px;
`;

export const Title = styled.div`
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
