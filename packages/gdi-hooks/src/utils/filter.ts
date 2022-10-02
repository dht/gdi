import { isEmpty } from 'lodash';
import { minutesPassed, sortBy } from 'shared-base';

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
    field: IFilterField,
    value: string[]
) => {
    const { cellType } = field;

    if (isEmpty(value)) {
        return data;
    }

    const method = filterMethods[cellType];

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
    const { cellType } = field;

    if (isEmpty(value)) {
        return data;
    }

    return data.filter((i) => {
        const iValue = i[field.id];
        return value.includes(iValue);
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

    const options = value.map((v) => {
        return field.options.find((o: IOption) => v === o.id);
    });

    return data.filter((i) => {
        const iValue = i[field.id];

        return options.find((o) => {
            const { min, max, value } = o;
            const valueOk = iValue === value;
            const minOk = iValue >= min || typeof min === 'undefined';
            const maxOk = iValue < max || typeof max === 'undefined';

            return (minOk && maxOk) || valueOk;
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

    const options = value.map((v) => {
        return field.options.find((o: IOption) => v === o.id);
    });

    return data.filter((i) => {
        const iValue = i[field.id];

        const minutes = minutesPassed(now, new Date(iValue));

        return options.find((o) => {
            const { min, max } = o;
            const minOk = minutes >= min || typeof min === 'undefined';
            const maxOk = minutes < max || typeof max === 'undefined';

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
    number: filterNumber,
    text: filterText,
    tags: filterText,
    date: filterDate,
    timeAgo: filterText,
    id: filterText,
    social: filterText,
};
