import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

type Option = {
    key: string;
    text: string;
};

export const $elementTypes = createSelector(
    base.$elementTypes,
    (elementTypes): Option[] => {
        return elementTypes.map((elementType) => {
            return {
                key: elementType,
                text: elementType,
            };
        });
    }
);

export const $imageTags = createSelector(
    base.$libraryImages,
    (images): Option[] => {
        const allTags = new Set<string>();

        images.forEach((image) => {
            const { tags } = image;
            tags.forEach((tag) => allTags.add(tag));
        });

        const output = Array.from(allTags);

        output.sort();

        return output.map((tag) => ({
            key: tag,
            text: tag,
        }));
    }
);

export const $allOptions = createSelector(
    $elementTypes,
    $imageTags,
    (elementTypes, imageTags) => {
        return {
            $elementTypes: elementTypes,
            $imageTags: imageTags,
        };
    }
);
