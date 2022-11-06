import { isEmpty } from 'lodash';
import { sortBy } from 'shared-base';
import { minutesPassed } from '@gdi/language';

export const filterByConfig = (
    config: IFilterConfig,
    data: Json[],
    params: ITrio
) => {
    const { fields } = config;
    const { filter, sort } = params;
    const { direction, id: sortFieldId } = sort;

    let output = [...data];

    Object.keys(filter).forEach((key) => {
        const field = fields.find((i: IFilterField) => i.id === key);
        const value = filter[key];
        output = filterByField(output, field, value);
    });

    if (sortFieldId) {
        output = output.sort(sortBy(sortFieldId, direction));
    }

    return output;
};

export const filterByField = (
    data: Json[],
    field: IFilterField | undefined,
    value: string[]
) => {
    if (!field) {
        return [];
    }

    const { cellType } = field;

    if (isEmpty(value)) {
        return data;
    }

    const method = filterMethods[cellType as CellType];

    if (typeof method !== 'function') {
        return data;
    }

    return method(data, field, value);
};

export const filterText = (
    data: Json[],
    field: IFilterField,
    value: string[]
) => {
    if (isEmpty(value)) {
        return data;
    }

    return data.filter((i) => {
        const iValue = i[field.id];
        return value.includes(iValue);
    });
};

export const filterTags = (
    data: Json[],
    field: IFilterField,
    tags: string[]
) => {
    if (isEmpty(tags)) {
        return data;
    }

    return data.filter((i) => {
        const iValue = i[field.id];
        return tags.some((tag) => iValue.includes(tag));
    });
};

export const filterNumber = (
    data: Json[],
    field: IFilterField,
    value: string[]
) => {
    if (isEmpty(value)) {
        return data;
    }

    const options = value
        .map((v) => {
            return (field.options ?? []).find((o: IOption) => v === o.id);
        })
        .filter((i) => i) as IOption[];

    return data.filter((i) => {
        const iValue = i[field.id];

        return options.find((o) => {
            const { min, max, value } = o;
            const valueOk = iValue === value;
            const minOk = typeof min === 'undefined' || iValue >= min;
            const maxOk = typeof max === 'undefined' || iValue < max;

            return (minOk && maxOk) ?? valueOk;
        });
    });
};

const now = new Date();

export const filterDate = (
    data: Json[],
    field: IFilterField,
    value: string[]
) => {
    if (isEmpty(value)) {
        return data;
    }

    const options = value
        .map((v) => {
            return (field.options ?? []).find((o: IOption) => v === o.id);
        })
        .filter((i) => i) as IOption[];

    return data.filter((i) => {
        const iValue = i[field.id];

        const minutes = minutesPassed(new Date(iValue)) ?? 0;

        return options.find((o) => {
            const { min, max } = o;
            const minOk = typeof min === 'undefined' || minutes >= min;
            const maxOk = typeof max === 'undefined' || minutes < max;

            return minOk && maxOk;
        });
    });
};

type FilterMethod = (
    data: Json[],
    field: IFilterField,
    value: string[]
) => Json[];

export const filterMethods: Record<CellType, FilterMethod> = {
    image: filterText,
    person: filterText,
    icon: filterText,
    number: filterNumber,
    text: filterText,
    tags: filterTags,
    date: filterDate,
    timeAgo: filterText,
    id: filterText,
    social: filterText,
};
