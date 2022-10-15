import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    font-family: monospace;
    padding: 10px;
`;

export const Line = styled.div`
    line-height: 1.3;
    min-height: 20px;
`;

export const Part = styled.span`
    &.export {
        color: #f92672;
        margin-right: 5px;
    }

    &.type {
        color: #67d9ef;
        margin-right: 5px;
    }

    &.variableName {
        color: #a6e22e;
        margin-right: 5px;
    }

    &.fieldName {
        margin-left: 25px;
        color: #f8f8f2;
    }

    &.colon {
        color: #f92672;
        margin-right: 8px;
    }

    &.questionMark {
        color: #f92672;
    }

    &.equality {
        color: #f92672;
    }

    &.semiColon {
        color: #f8f8f2;
    }

    &.primitive {
        color: #67d9ef;
    }

    &.nonPrimitive {
        color: #a6e22e;
    }

    &.bracketsSquare {
        color: #da70d6;
    }

    &.bracketsCurly {
        color: #ffd703;
    }
`;
