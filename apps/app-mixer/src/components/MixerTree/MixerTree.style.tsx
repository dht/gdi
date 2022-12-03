import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #334;
    width: 350px;
    height: 250px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2),
        inset 0 0 15px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    max-width: 100px;
    transition: max-width 0.2s ease-out, height 0.2s ease-out;

    &.open {
        max-width: 350px;
        height: 450px;

        .column {
            max-width: 250px;
        }

        .content {
            max-height: 450px;
        }

        .toggle-icon {
            transform: rotate(180deg);
        }
    }

    [contenteditable='true']:empty:not(:focus):before {
        content: attr(data-ph);
        color: grey;
        font-style: italic;
    }
`;

export const Content = styled.div`
    display: flex;
    padding: 0;
    flex: 1;
    max-height: 250px;
`;

export const ContainerInstances = styled.div`
    width: 200px;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: inset -3px 0 3px rgba(255, 255, 255, 0.2);
    overflow: auto;
`;

export const Instance = styled.div`
    ${(props) => props.theme.padding('10px 3px 10px 8px')}
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;

    .star {
        color: gold;
        ${(props) => props.theme.marginLeft('5px')}
        position: relative;
        top: 1px;
    }

    &.empty {
        color: #778;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: inset -3px 0 3px 1px rgba(255, 255, 255, 0.2);
    }

    &.selected {
        color: gold;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: inset -3px 0 3px 1px rgba(0, 0, 0, 0.1);
    }
`;

export const InstanceName = styled.div`
    flex: 1;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    overflow: hidden;
    max-width: 0;
    transition: max-width 0.2s ease-out;
`;

export const Info = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    box-shadow: inset 0 5px 2px 0 rgba(0, 0, 0, 0.1);
    text-align: left;
    min-width: 190px;
`;

export const InstanceCount = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 17px;
`;

export const Toggle = styled.div`
    position: absolute;
    ${(props) => props.theme.left('-20px')}
    width: 20px;
    background-color: #223;
    height: 50px;
    position: absolute;
    z-index: 999;
    color: #aaa;
    top: 54px;
    border-radius: 10px 0 0 10px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2),
        inset 0 0 15px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: gold;
    }

    i {
        transition: all 0.2s ease-out;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DescriptionWrapper = styled.div`
    flex: 1;
    padding: 20px;
    min-width: 170px;
`;

export const InstanceTitle = styled.div`
    font-size: 27px;
    font-weight: 200;
    color: gold;

    margin-bottom: 3px;
    padding: 5px 10px;
    border: 1px solid transparent;

    &:hover {
        box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
        border: 1px solid #223;
    }

    &:focus {
        border: 1px solid gold;
    }

    outline: none;
`;

export const Description = styled.div`
    flex: 1;
    height: 220px;
    padding: 10px;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #223;
        box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    &:focus {
        border: 1px solid gold;
    }

    outline: none;
`;
