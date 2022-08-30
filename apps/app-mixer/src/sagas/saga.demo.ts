import { actions } from '../store';
import { call, fork, put, delay, takeLatest } from 'saga-ts';

const map: Record<string, any> = {
    '/blocks': actions.blocks.setAll,
    '/images': actions.images.setAll,
    '/instancesBlocks': actions.instancesBlocks.setAll,
    '/instancesProps': actions.instancesProps.setAll,
    '/libraryBlocks': actions.libraryBlocks.setAll,
    '/libraryImages': actions.libraryImages.setAll,
    '/libraryPalettes': actions.libraryPalettes.setAll,
    '/libraryTypography': actions.libraryTypography.setAll,
    '/locales': actions.locales.setAll,
    '/pages': actions.pages.setAll,
    '/singles/fontSizes': actions.fontSizes.setAll,
    '/singles/packages': actions.packages.setAll,
    '/singles/palette': actions.palette.setAll,
    '/singles/spacing': actions.spacing.setAll,
    '/singles/strings': actions.strings.setAll,
};

function* fetchData(path: string, method: any) {
    const response = yield* call(_fetch, path);
    yield put(method(response));
}

function* demo() {
    yield put(actions.appStateMixer.patch({ showPlayModeMessage: true }));
    yield delay(500);

    for (let path of Object.keys(map)) {
        const method = map[path];
        yield fork(fetchData, path, method);
    }
}

export function* root() {
    yield takeLatest('DEMO', demo);
}

const _fetch = (path: string) => {
    const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents${path}`;

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.documents) {
                return parseDocuments(res.documents);
            } else {
                return parseDocument(res.fields);
            }
        });
};

const parseDocuments = (documents: Json[]) => {
    return documents.reduce((output, docRaw) => {
        const doc = parseDocument(docRaw.fields);
        output[doc.id] = doc;
        return output;
    }, {} as Json);
};

export const parseDocument = (value: Json) => {
    let newVal: any = value;

    const prop = getFireStoreProp(newVal);
    if (prop === 'doubleValue' || prop === 'integerValue') {
        newVal = Number(newVal[prop]);
    } else if (prop === 'arrayValue') {
        newVal = ((newVal[prop] && newVal[prop].values) || []).map((v) =>
            parseDocument(v)
        );
    } else if (prop === 'mapValue') {
        newVal = parseDocument((newVal[prop] && newVal[prop].fields) || {});
    } else if (prop === 'geoPointValue') {
        newVal = { latitude: 0, longitude: 0, ...newVal[prop] };
    } else if (prop) {
        newVal = newVal[prop];
    } else if (typeof newVal === 'object') {
        Object.keys(newVal).forEach((k) => {
            newVal[k] = parseDocument(newVal[k]);
        });
    }
    return newVal;
};

const getFireStoreProp = (value: Json) => {
    const props: Record<string, boolean> = {
        arrayValue: true,
        bytesValue: true,
        booleanValue: true,
        doubleValue: true,
        geoPointValue: true,
        integerValue: true,
        mapValue: true,
        nullValue: true,
        referenceValue: true,
        stringValue: true,
        timestampValue: true,
    };
    return Object.keys(value).find((k) => props[k]);
};
