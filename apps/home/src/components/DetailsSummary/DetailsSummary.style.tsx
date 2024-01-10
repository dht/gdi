import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;

    svg {
        stroke-width: 1.2px;
    }
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    font-size: 17px;
    line-height: 1.4;
    color: #666;
`;

export const OneLiner = styled.h2`
    font-size: 22px;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
`;

export const Section = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
`;

export const Row = styled.div``;

export const Identifier = styled.div`
    color: #aaa;
`;
