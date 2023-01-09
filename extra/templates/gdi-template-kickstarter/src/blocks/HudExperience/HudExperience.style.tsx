import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    overflow: hidden;
    background-color: white;
`;

export const Item = styled.div<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 49vw;
    height: 50vh;
    float: left;
    margin: 10px;
`;
