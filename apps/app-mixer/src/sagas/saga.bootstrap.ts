import { fork } from 'saga-ts';
import { getBoolean, setBoolean, setJson } from 'shared-base';

const FIRST_TIME_KEY = 'FIRST_TIME_KEY';

function* bootstrap() {
    const didRunBefore = getBoolean(FIRST_TIME_KEY);

    if (didRunBefore) {
        return;
    }

    setJson('CHECKBOXES_ModalImportSite', {
        libraryPages: true,
        libraryPageInstances: true,
        libraryInstances: true,
        libraryInstancesProps: true,
        libraryWidgets: true,
        libraryImages: true,
        libraryDatasets: true,
        pages: true,
        pageInstances: true,
        instances: true,
        instancesProps: true,
        widgets: true,
        images: true,
        datasets: true,
        locale: true,
        palette: true,
        fonts: true,
        breakpoints: true,
        siteProperties: true,
        articles: true,
        layouts: true,
    });

    setBoolean(FIRST_TIME_KEY, true);
}

export function* root() {
    yield fork(bootstrap);
}
