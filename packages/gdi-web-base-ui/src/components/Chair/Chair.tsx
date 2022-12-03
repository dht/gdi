import React, { FC } from 'react';
import { Wrapper, Flavour, FlavourTitle } from './Chair.style';

export const id = 'com.usegdi.templates.basic.ChairI';

export type ChairProps = {
    widget: IWidget;
    sequence: number;
};

export function Chair(props: ChairProps) {
    const { widget, sequence } = props;
    const { id, component: Cmp } = widget;

    function renderFlavour(flavour: string, data: Json, index: number) {
        const { container } = data;

        const className = `${id}-${flavour}`.replace(/\./g, '_');

        if (!Cmp) {
            return null;
        }

        let style: React.CSSProperties = {};

        if (container) {
            style.width = container.width;
            style.height = container.height;
        }

        return (
            <React.Fragment key={index}>
                <FlavourTitle>{flavour}</FlavourTitle>
                <Flavour className={className} style={style}>
                    <Cmp
                        sequence={sequence + index}
                        key={widget.id + '-' + data.id}
                        {...data}
                        isScreenshotMode={true}
                    />
                </Flavour>
            </React.Fragment>
        );
    }

    function renderFlavours() {
        const { sampleData = {} } = widget;

        return Object.keys(sampleData).map((flavour: string, index) =>
            renderFlavour(flavour, parseSampleData(sampleData[flavour]), index)
        );
    }

    return (
        <Wrapper className='Chair-wrapper' data-testid='Chair-wrapper'>
            {renderFlavours()}
        </Wrapper>
    );
}

const parseSampleData = (data: Json) => {
    const strings = Object.keys(data.strings).reduce((acc, key) => {
        const value = data.strings[key];

        const regexLorem = /{lorem-([\d]+)-?([\d]+)?}/g;
        const matchLorem = regexLorem.exec(value);

        if (matchLorem) {
            const [, min, max] = matchLorem;
            const length = rnd(Number(min), Number(max ?? min));
            acc[key] = sentence(length);
        } else {
            acc[key] = value;
        }

        return acc;
    }, {} as Json);

    return {
        ...data,
        strings,
    };
};

const rnd = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sentence = (length: number) => {
    return lorem.split(' ').slice(0, length).join(' ');
};

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum velit mi, in egestas lorem consequat vitae. Nulla et ullamcorper sem, placerat commodo risus. Mauris molestie mauris eleifend fermentum fermentum. Duis ullamcorper, quam in facilisis finibus, sapien leo placerat lorem, sit amet lobortis lorem sapien ac sapien. Phasellus egestas commodo tortor vitae malesuada. Curabitur sagittis massa fringilla ornare bibendum. ';

export default Chair;
