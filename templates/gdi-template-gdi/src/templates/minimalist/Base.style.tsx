import styled from 'styled-components';

export const BaseButton = styled.button<{ white?: boolean }>`
    background-color: ${(props) => (props.white ? 'white' : 'var(--bk-light)')};
    color: var(--bk);
    font-size: 20px;
    padding: 16px 30px;
    margin-left: 20px;
    border-radius: 40px;
    font-weight: bold;
    border: 1px solid transparent;
    cursor: pointer;
    position: relative;
    box-shadow: inset 2px -2px 1px 2px rgba(0, 0, 0, 0.05);
    font-weight: 500;
    white-space: nowrap;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        position: relative;
        bottom: 2px;
        left: 2px;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            pointer-events: none;
            border-radius: 20px;
            box-shadow: inset -2px 2px 1px 2px rgba(0, 0, 0, 0.1);
        }
    }

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const BaseWrapper = styled.div<{ vertical?: boolean }>`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 640px;
    }
`;
