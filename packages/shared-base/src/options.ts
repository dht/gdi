import { upperFirst } from './godash';

export const arrayToOptions = (array: string[]) => {
    return array.map((item) => {
        const [id, iconName] = item.split('|');

        return {
            id,
            text: upperFirst(id),
            value: id,
            iconName,
        };
    });
};

type Item = Json & {
    tags: string[];
};

type Items = Record<string, Item>;

export const itemsTagsToOptions = (arrayOrObject: Item[] | Items) => {
    let items = Array.isArray(arrayOrObject)
        ? arrayOrObject
        : Object.values(arrayOrObject);

    const allTags = new Set<string>();

    items.forEach((item) => {
        const { tags = [] } = item;
        tags.forEach((tag) => allTags.add(tag));
    });

    const output = Array.from(allTags);

    output.sort();

    return output.map((tag) => ({
        id: tag,
        text: tag,
    }));
};

type Minutes = {
    today: number;
    week: number;
    month: number;
    year: number;
};

export const optionsPeriod = (minutes: Minutes, includeLastHour?: boolean) => {
    const output = [
        {
            id: 'today',
            text: 'Today',
            max: minutes.today,
        },
        {
            id: 'thisWeek',
            text: 'This week',
            max: minutes.week,
        },
        {
            id: 'thisMonth',
            text: 'This month',
            max: minutes.month,
        },
        {
            id: 'thisYear',
            text: 'This year',
            max: minutes.year,
        },
    ];

    if (includeLastHour) {
        output.unshift({
            id: 'lastHour',
            text: 'Last hour',
            max: 60,
        });
    }

    return output;
};
