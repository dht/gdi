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

export const $imageFields = createSelector(
    base.$imageFieldsForCurrentElement,
    (imageFields): Option[] => {
        return Object.keys(imageFields).map((key) => {
            const text = key.split('.').pop() || key;
            return {
                key,
                text,
            };
        });
    }
);

export const $allOptions = createSelector(
    $elementTypes,
    $imageTags,
    $imageFields,
    (elementTypes, imageTags, imageFields) => {
        return {
            $elementTypes: elementTypes,
            $imageTags: imageTags,
            $imageFields: imageFields,
        };
    }
);
