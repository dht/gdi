import React, { useMemo } from 'react';
import { Container, Line, Part } from './TypeView.style';
import classnames from 'classnames';

export type TypeViewProps = {
    value: string;
};

export function TypeView(props: TypeViewProps) {
    const { value } = props;

    const lines = useMemo(() => {
        return analyzeType(value);
    }, [value]);

    function onFocus(ev: React.FocusEvent<HTMLDivElement>) {
        if (!ev.target) {
            return;
        }

        const selection = window.getSelection();

        if (!selection) {
            return;
        }

        setTimeout(() => {
            selection.selectAllChildren(ev.target);
        }, 100);

        return false;
    }

    function renderPart(part: IPart, index: number) {
        const { partType, content } = part;

        const className = classnames('part', partType);

        const contentEditable = easyCopyPaste.includes(partType);

        return (
            <Part
                key={index}
                className={className}
                contentEditable={contentEditable}
                suppressContentEditableWarning={true}
                onFocus={onFocus}
                spellCheck={false}
            >
                {content}
            </Part>
        );
    }

    function renderParts(parts: IPart[]) {
        return parts.map((part: IPart, index) => renderPart(part, index));
    }

    function renderLine(line: ILine) {
        return (
            <Line key={line.index} className='line'>
                {renderParts(line.parts)}
            </Line>
        );
    }

    function renderLines() {
        return lines.map((line: ILine) => renderLine(line));
    }

    return (
        <Container
            className='TypeView-container'
            data-testid='TypeView-container'
        >
            {renderLines()}
        </Container>
    );
}

type PartType =
    | 'export'
    | 'type'
    | 'variableName'
    | 'questionMark'
    | 'fieldName'
    | 'colon'
    | 'equality'
    | 'semiColon'
    | 'primitive'
    | 'nonPrimitive'
    | 'bracketsSquare'
    | 'bracketsCurly';

type ILine = {
    index: number;
    parts: IPart[];
};

type IPart = {
    partType: PartType;
    content: string;
};

function analyzeType(value: string): ILine[] {
    let lines: ILine[] = [];
    let index = 0,
        i = 0,
        partType: PartType;

    for (let line of value.split('\n')) {
        index++;

        let parts: IPart[] = [];
        const regexFirstLine = /^(export) *(type) *([a-z]+) *(=) *{/gi;
        const regexLine = / *([a-z0-9]+)(\?)?(:) *([^;]+)(;)/gi;
        const regexLastLine = / *(})(;)/gi;

        const isFirstLine = line.match(regexFirstLine);
        const isLine = line.match(regexLine);
        const isLastLine = line.match(regexLastLine);
        let matches;

        if (isFirstLine) {
            matches = regexFirstLine.exec(line);
            if (matches) {
                i = 1;
                parts.push({ content: matches[i++], partType: 'export' });
                parts.push({ content: matches[i++], partType: 'type' });
                parts.push({ content: matches[i++], partType: 'variableName' });
                parts.push({ content: matches[i++], partType: 'equality' });
                parts.push({
                    content: matches[i++],
                    partType: 'bracketsCurly',
                });
            }
        } else if (isLastLine) {
            matches = regexLastLine.exec(line);

            if (matches) {
                i = 1;
                parts.push({
                    content: matches[i++],
                    partType: 'bracketsCurly',
                });

                parts.push({
                    content: matches[i++],
                    partType: 'semiColon',
                });
            }
        } else if (isLine) {
            matches = regexLine.exec(line);
            if (matches) {
                i = 1;

                parts.push({ content: matches[i++], partType: 'fieldName' });

                if (matches[i++] === '?') {
                    parts.push({
                        content: matches[i - 1],
                        partType: 'questionMark',
                    });
                }

                parts.push({ content: matches[i++], partType: 'colon' });

                partType = primitives.includes(matches[i])
                    ? 'primitive'
                    : 'nonPrimitive';

                parts.push({ content: matches[i++], partType });
                parts.push({ content: matches[i++], partType: 'semiColon' });
            }
        }

        lines.push({
            index,
            parts,
        });
    }

    return lines;
}

const primitives = ['string', 'number', 'boolean', 'null', 'undefined', 'any'];

const easyCopyPaste: PartType[] = [
    'fieldName',
    'variableName',
    'nonPrimitive',
    'primitive',
];

export default TypeView;
