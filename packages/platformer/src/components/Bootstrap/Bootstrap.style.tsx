import styled from 'styled-components';

export const Content = styled.div<{ isRtl?: boolean }>`
    flex: 1;
    display: flex;

    @media (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

export const Version = styled.div`
    position: fixed;
    bottom: 20px;
    color: white;
    opacity: 0.3;
    font-size: 11px;
`;

export const AppContent = styled.div`
    flex: 1;
    ${(props) => props.theme.paddingLeft('46px')}
    display: flex;

    @media (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
