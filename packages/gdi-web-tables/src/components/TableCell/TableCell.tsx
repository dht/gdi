import React, { FC, useContext, useMemo } from 'react';
import { CellType, ITableField } from '../../types';
import { TableContext } from '../Table/Table.context';
import { SocialIcon } from '@gdi/web-base-ui';
import { timeAgo, shortDate } from 'shared-base';
import { format } from 'date-fns';
import {
    Container,
    Description,
    Id,
    Image,
    Name,
    Number,
    Social,
    SubText,
    Tag,
    Tags,
    Text,
} from './TableCell.style';

export type TableCellProps = {
    id?: string;
    index: number;
    field: ITableField;
    data: Json;
};

export function TableCell(props: TableCellProps) {
    const { field, data, index } = props;
    const context = useContext(TableContext);

    const { id, cellType, mapFields } = field;

    const cellData = useMemo(() => {
        if (!mapFields) {
            return {
                value: data[id],
            };
        }

        return Object.keys(mapFields).reduce((output, key) => {
            const value = mapFields[key];

            output[key] = data[value];
            return output;
        }, {} as Json);
    }, [mapFields, data]);

    const Cmp = map[cellType as CellType];

    const width = context.widths[index];

    const style = {
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
    };

    return (
        <Container
            className='TableCell-container'
            data-testid='TableCell-container'
            style={style}
        >
            <Cmp index={index} id={id} field={field} data={cellData} />
        </Container>
    );
}

export function TableCellImage(props: TableCellProps) {
    const { data } = props;
    const { imageUrl } = data;

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <>
            <Image style={style} />
        </>
    );
}
export function TableCellPerson(props: TableCellProps) {
    const { data } = props;
    const { firstName, lastName, description } = data;

    return (
        <>
            <Name>
                {firstName} {lastName}
            </Name>
            {description && (
                <Description opacity={0.3}>{description}</Description>
            )}
        </>
    );
}
export function TableCellNumber(props: TableCellProps) {
    const { data, field } = props;
    const { params = {} } = field;
    const { units = '' } = params;
    const { value } = data;

    const numberText = useMemo(() => {
        return parseFloat(value).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }, [value]);

    return (
        <>
            <Number>
                {numberText} {units}
            </Number>
        </>
    );
}
export function TableCellText(props: TableCellProps) {
    const { data } = props;
    const { value, value2 } = data;

    return (
        <>
            <Text>{value}</Text>
            {value2 && <Text opacity={0.4}>{value2}</Text>}
        </>
    );
}
export function TableCellTags(props: TableCellProps) {
    const { data } = props;
    const { value = [] } = data;

    function renderTag(tag: string) {
        return (
            <Tag key={tag} className='tag'>
                {tag}
            </Tag>
        );
    }

    function renderTags() {
        return value.map((tag: string) => renderTag(tag));
    }

    return <Tags>{renderTags()}</Tags>;
}

export function TableCellDate(props: TableCellProps) {
    const { data } = props;
    const { value } = data;

    const dateText = useMemo(() => {
        return format(new Date(value), 'dd-MM-yyyy');
    }, [value]);

    return (
        <>
            <Text>{dateText}</Text>
        </>
    );
}

export function TableCellTimeAgo(props: TableCellProps) {
    const { data } = props;
    const { value } = data;

    const dateText = useMemo(() => {
        return shortDate(value);
    }, [value]);

    const timeAgoText = useMemo(() => {
        return timeAgo(value);
    }, [value]);

    return (
        <>
            <Text>{dateText}</Text>
            <SubText>{timeAgoText}</SubText>
        </>
    );
}

export function TableCellId(props: TableCellProps) {
    const { data } = props;
    const { value } = data;

    return (
        <>
            <Id>{value}</Id>
        </>
    );
}

export function TableCellSocial(props: TableCellProps) {
    const { data } = props;
    const { twitter, facebook, instagram, linkedIn, wikipedia } = data;

    return (
        <Social>
            {twitter && <SocialIcon url={twitter} />}
            {facebook && <SocialIcon url={facebook} />}
            {instagram && <SocialIcon url={instagram} />}
            {linkedIn && <SocialIcon url={linkedIn} />}
            {wikipedia && <SocialIcon url={wikipedia} />}
        </Social>
    );
}

const map: Record<CellType, FC<TableCellProps>> = {
    image: TableCellImage,
    person: TableCellPerson,
    number: TableCellNumber,
    text: TableCellText,
    tags: TableCellTags,
    date: TableCellDate,
    social: TableCellSocial,
    timeAgo: TableCellTimeAgo,
    id: TableCellId,
};

export default TableCell;
