import { checkWhetherIsInPast, weekAndDOWToInfo } from './date';

function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export const sumDomains = (
    domains: any,
    appState: any,
    expectedOrActual: any,
    fieldName: string,
    outFieldName: string
) => {
    const fieldValue = appState[`${fieldName}Id`];
    const groupName = `by${capitalize(fieldName)}s`;
    const forDate = expectedOrActual[groupName][fieldValue] ?? {};

    return Object.values(domains).reduce((output: any, domain: any) => {
        output[domain.id] = {
            ...domain,
            [outFieldName]: forDate[domain.id] || 0,
        };
        return output;
    }, {} as any);
};

export const chartAllDomains = (
    appState: any,
    expected: any,
    actual: any,
    fieldName: string
) => {
    const data = [];
    const fieldValue = appState[`${fieldName}Id`];
    const isInPast = checkWhetherIsInPast({ [fieldName]: fieldValue });

    const firstSeries = Object.values(expected).reduce(
        (output: any, domain: any) => {
            output[domain.title] = domain.expected;
            return output;
        },
        {}
    );

    data.push(firstSeries);

    if (isInPast) {
        const secondSeries = Object.values(actual).reduce(
            (output: any, domain: any) => {
                output[domain.title] = domain.actual;
                return output;
            },
            {}
        );

        data.push(secondSeries);
    }

    return data;
};

export const chartSingleDomain = (
    appState: any,
    expected: any,
    actual: any
) => {
    const data = [];
    const isInPast = checkWhetherIsInPast({ week: appState.weekId });

    const firstSeries = Object.keys(expected).reduce(
        (output: any, dayOfYear: any) => {
            output[dayOfYear] = expected[dayOfYear];
            return output;
        },
        {}
    );

    data.push(firstSeries);

    if (isInPast) {
        const secondSeries = Object.keys(actual).reduce(
            (output: any, dayOfYear: any) => {
                output[dayOfYear] = actual[dayOfYear];
                return output;
            },
            {}
        );
        data.push(secondSeries);
    }

    return data;
};

export const sumWeekSingle = (appState: any, expectedOrActual: any) => {
    const { weekId, selectedDomainId: domain } = appState;
    const output = {} as any;

    for (let day = 0; day < 7; day++) {
        const info = weekAndDOWToInfo(weekId, day);
        const forDate = expectedOrActual['byDays'][info.dayOfYear] ?? {};
        const minutes = forDate[domain] || 0;
        output[String(info.dayOfYear)] = minutes;
    }

    return output;
};

export const sumQuarterSingle = (appState: any, expectedOrActual: any) => {
    const { quarterId, selectedDomainId: domain } = appState;
    const output = {} as any;

    for (let week = 1; week <= 13; week++) {
        const weekId = (quarterId - 1) * 13 + week;
        const info = weekAndDOWToInfo(weekId, 0);
        const forDate = expectedOrActual['byWeeks'][info.week] ?? {};
        const minutes = forDate[domain] || 0;
        output[String(info.week)] = minutes;
    }

    return output;
};
