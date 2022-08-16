import { ReplaceMap, ReplaceMethod } from '../types';

export const replaceText = (
    text: string,
    regexString: string,
    replaceWith: ReplaceMethod,
    context: any
) => {
    const regex = new RegExp('(' + regexString + ')', 'g');

    return text.replace(regex, () => {
        return replaceWith(context);
    });
};

export const replaceTextByMap = (
    text: string,
    replaceMap: ReplaceMap,
    context: any
) => {
    let output = text;

    Object.keys(replaceMap).forEach((regexString) => {
        output = replaceText(
            output,
            regexString,
            replaceMap[regexString],
            context
        );
    });

    return output;
};
