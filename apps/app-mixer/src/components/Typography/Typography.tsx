import React from 'react';
import { Wrapper, Title } from './Typography.style';
import { List } from '@gdi/web-ui';
import classnames from 'classnames';

export type TypographyProps = {
    options: ITypography[];
    selectedTypographyId: string;
    onSelect: (id: string) => void;
};

export function Typography(props: TypographyProps) {
    const { options, selectedTypographyId } = props;

    function renderItem(option: any, selected: boolean) {
        const { id, fontFamily } = option as ITypography;

        const style = {
            fontFamily,
        };

        const className = classnames({
            selected,
        });

        return (
            <Title style={style} className={className}>
                {id}
            </Title>
        );
    }

    return (
        <Wrapper
            className='Typography-wrapper'
            data-testid='Typography-wrapper'
        >
            <List
                options={options}
                renderItem={renderItem}
                onSelect={props.onSelect}
                selectedOptionId={selectedTypographyId}
            />
        </Wrapper>
    );
}

export default Typography;
