import { actions, selectors } from '../../store';
import { SourceDestination, Entity } from '../../types';
import { select } from 'saga-ts';

// P
export function* createPage(
    source: SourceDestination,
    sourceId: string,
    destination: SourceDestination,
    destinationId?: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawPages
            : selectors.raw.$rawLibraryPages;

    const pages = yield* select(selector);
    const page = pages[sourceId];
}

// V
export function* createPageInstance(
    source: SourceDestination,
    destination: SourceDestination,
    id: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawPageInstances
            : selectors.raw.$rawLibraryPageInstances;

    const pageInstance = yield* select(selector);
}

// I
export function* createInstance(
    source: SourceDestination,
    destination: SourceDestination,
    id: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawInstances
            : selectors.raw.$rawLibraryInstances;
}

// D
export function* createInstancesProps(
    source: SourceDestination,
    destination: SourceDestination,
    id: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawInstancesProps
            : selectors.raw.$rawLibraryInstancesProps;
}

// W
export function* createWidget(
    source: SourceDestination,
    destination: SourceDestination,
    id: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawWidgets
            : selectors.raw.$rawLibraryWidgets;
}

// M
export function* createImage(
    source: SourceDestination,
    destination: SourceDestination,
    id: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawImages
            : selectors.raw.$rawLibraryImages;
}

export function* create(
    source: SourceDestination,
    destination: SourceDestination,
    entityType: Entity,
    id: string
) {
    switch (entityType) {
        case 'page':
            yield createPage(source, destination, id);
            break;
        case 'pageInstance':
            yield createPageInstance(source, destination, id);
            break;
        case 'instance':
            yield createInstance(source, destination, id);
            break;
        case 'instancesProps':
            yield createInstancesProps(source, destination, id);
            break;
        case 'widget':
            yield createWidget(source, destination, id);
            break;
        case 'image':
            yield createImage(source, destination, id);
            break;
    }
}
