import { SourceDestination, Entity } from '../../types';

// P
export function* clearPage(
    destination: SourceDestination,
    destinationId: string
) {
    const selector =
        source === 'site'
            ? selectors.raw.$rawPages
            : selectors.raw.$rawLibraryPages;

    const page = yield* select(selector);

    console.log('clearPage ->', destination, destinationId);
}

// V
export function* clearPageInstance(
    destination: SourceDestination,
    destinationId: string
) {
    console.log('clearPageInstance ->', destination, destinationId);
}

// I
export function* clearInstance(
    destination: SourceDestination,
    destinationId: string
) {
    console.log('clearInstance ->', destination, destinationId);
}

// D
export function* clearInstancesProps(
    destination: SourceDestination,
    destinationId: string
) {
    console.log('clearInstancesProps ->', destination, destinationId);
}

// W
export function* clearWidget(
    destination: SourceDestination,
    destinationId: string
) {
    console.log('clearWidget ->', destination, destinationId);
}

// M
export function* clearImage(
    destination: SourceDestination,
    destinationId: string
) {
    console.log('clearImage ->', destination, destinationId);
}

export function* clear(
    destination: SourceDestination,
    entityType: Entity,
    destinationId: string
) {
    switch (entityType) {
        case 'page':
            yield clearPage(destination, destinationId);
            break;
        case 'pageInstance':
            yield clearPageInstance(destination, destinationId);
            break;
        case 'instance':
            yield clearInstance(destination, destinationId);
            break;
        case 'instancesProps':
            yield clearInstancesProps(destination, destinationId);
            break;
        case 'widget':
            yield clearWidget(destination, destinationId);
            break;
        case 'image':
            yield clearImage(destination, destinationId);
            break;
    }
}
