import styled from 'styled-components';

export const Content = styled.div<{ isRtl?: boolean }>`
    flex: 1;
    padding-left: ${(props) => (props.isRtl ? '0px' : '46px')};
    padding-right: ${(props) => (props.isRtl ? '46px' : '0px')};
    display: flex;

    @media (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

export const Version = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    color: white;
    opacity: 0.3;
    font-size: 11px;
`;
