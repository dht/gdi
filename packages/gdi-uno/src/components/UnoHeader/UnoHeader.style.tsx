import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    justify-self: flex-end;
`;

export const Column = styled.div<{ flex?: boolean }>`
    flex-grow: ${(props) => (props.flex ? 1 : 0)};
`;

export const Thumb = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`;

export const H1 = styled.h1`
    font-variation-settings: 'wdth' 110, 'wght' 480;
    padding: 0;
    margin: 6px 0 10px;
    font-size: 40px;
`;

export const AuthorLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const RatingLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Divider = styled.div`
    &&:after {
        content: '|';
        padding: 0 8px;
    }
`;

export const Category = styled.div``;

export const Downloads = styled.div``;
