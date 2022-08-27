import React from 'react';
import { Container, Title } from './Locale.style';
import { List } from '@gdi/web-ui';
import classnames from 'classnames';

export type LocaleProps = {
    options: ILocaleOption[];
    selectedLocaleId: string;
    onSelect: (id: string) => void;
};

export function Locale(props: LocaleProps) {
    const { options, selectedLocaleId } = props;

    function renderItem(option: any, selected: boolean) {
        const { title } = option as ILocaleOption;

        const className = classnames({
            selected,
        });

        return <Title className={className}>{title}</Title>;
    }

    return (
        <Container className='Locale-container' data-testid='Locale-container'>
            <List
                options={options}
                renderItem={renderItem}
                onSelect={props.onSelect}
                selectedOptionId={selectedLocaleId}
            />
        </Container>
    );
}

export default Locale;
