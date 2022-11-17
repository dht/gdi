import { select } from 'saga-ts';
import { selectors } from '../../store';
import { SourceDestination, Entity } from '../../types';

// P
export function* get(
    source: SourceDestination,
    entityType: Entity,
    filter: (entity: Json) => boolean
) {
    const map = mapAll[source];
    const selector = map[entityType];

    const collection = yield* select(selector);

    return Object.values(collection).filter(filter);
}

const mapAll: {
    site: Record<Entity, any>;
    library: Record<Entity, any>;
} = {
    site: {
        image: selectors.raw.$rawImages,
        instance: selectors.raw.$rawInstances,
        instancesProps: selectors.raw.$rawInstancesProps,
        page: selectors.raw.$rawPages,
        pageInstance: selectors.raw.$rawPageInstances,
        widget: selectors.raw.$rawWidgets,
    },
    library: {
        image: selectors.raw.$rawLibraryImages,
        instance: selectors.raw.$rawLibraryInstances,
        instancesProps: selectors.raw.$rawLibraryInstancesProps,
        page: selectors.raw.$rawLibraryPages,
        pageInstance: selectors.raw.$rawLibraryPageInstances,
        widget: selectors.raw.$rawLibraryWidgets,
    },
};
