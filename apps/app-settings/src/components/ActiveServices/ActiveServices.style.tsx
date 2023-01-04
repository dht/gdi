import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const Content = styled.div`
    flex: 1;
    padding: 100px 0;
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    flex: 1;

    &:first-child {
        max-width: 200px;
    }
`;

export const Services = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    display: table;
    width: 800px;
`;

export const ServiceRow = styled.div`
    display: table-row;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const ServiceField = styled.div<{ color?: string }>`
    display: table-cell;
    padding: 5px;
    height: 50px;
    font-size: 18px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.color ?? '#ccd'};
`;

export const Description = styled.div`
    color: rgba(255, 255, 255, 0.3);
    max-width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Version = styled.div`
    color: rgba(255, 255, 255, 0.3);
`;

export const Flags = styled.div`
    color: rgba(255, 255, 255, 0.3);

    &.draft {
        color: #ab2b2b;
    }
`;

export const Color = styled.div<{ value: string }>`
    background-color: ${(props) => props.value};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 0 2px 4px rgba(0, 0, 0, 0.2);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        ${(props) => props.theme.left(0)}
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
    }
`;

export const ToggleWrapper = styled.div`
    display: table-cell;
    padding-top: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ToggleAll = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    max-width: 800px;

    padding: 0 25px 10px;
`;
