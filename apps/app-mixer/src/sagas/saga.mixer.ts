import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { prompt } from '@gdi/web-ui';
import { guid4 } from 'shared-base';
import LibraryWidgets from '../components/LibraryWidgets/LibraryWidgets';
import { getSchemaPropertiesByType } from '@gdi/store-mixer';

type ActionWidgetSelect = {
    type: 'ELEMENT_WIDGET_SELECT';
    widgetId: string;
};

function* duplicateWidgetFromLibrary(widgetId: string) {
    const widgets = yield* select(selectors.raw.$rawWidgets);

    if (widgets[widgetId]) {
        return;
    }

    const libraryWidgets = yield* select(selectors.raw.$rawLibraryWidgets);
    const libraryWidget = libraryWidgets[widgetId];

    yield put(actions.widgets.add(libraryWidget));
}

function* imagesFromSampleData(widgetId: string, instanceId: string) {
    const libraryWidgets = yield* select(selectors.raw.$rawLibraryWidgets);
    const libraryWidget = libraryWidgets[widgetId];

    const sampleDataByType = getSchemaPropertiesByType(libraryWidget, [
        'image',
        'color',
    ]);

    const change = Object.keys(sampleDataByType).reduce((output, key) => {
        const keyWithUnderscores = key.replace(/\./g, '_');
        output[keyWithUnderscores] = sampleDataByType[key];
        return output;
    }, {} as Json);

    yield put(actions.instancesProps.patch(instanceId, change));
}

function* dataFromSampleData(widgetId: string, instanceId: string) {
    const libraryWidgets = yield* select(selectors.raw.$rawLibraryWidgets);
    const libraryWidget = libraryWidgets[widgetId];

    const sampleDataByType = getSchemaPropertiesByType(libraryWidget, [
        'number',
        'text',
        'longText',
        'url',
        'checkbox',
    ]);

    const change = Object.keys(sampleDataByType).reduce(
        (output, key) => {
            const keyWithUnderscores = key.replace(/\./g, '_');
            output[keyWithUnderscores] = sampleDataByType[key];
            return output;
        },
        {
            id: instanceId,
        } as Json
    );

    yield put(actions.instancesProps.patch(instanceId, change));
}

function* switchWidgetForElement(action: ActionWidgetSelect) {
    const { widgetId } = action;

    yield call(duplicateWidgetFromLibrary, widgetId);

    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const selectedInstanceId = currentIds.selectedInstanceId;

    console.log('selectedInstanceId ->', selectedInstanceId);

    const isPlaceholder = yield* select(selectors.base.$isSelectedPlaceholder);

    console.log('isPlaceholder ->', isPlaceholder);

    if (isPlaceholder) {
        yield call(dataFromSampleData, widgetId, selectedInstanceId);
    }

    yield call(imagesFromSampleData, widgetId, selectedInstanceId);

    yield put(
        actions.instancesWidgets.patch(selectedInstanceId, {
            widgetId,
            isPlaceholder: false,
        })
    );
}

function* addElementWithWidget(action: ActionWidgetSelect) {
    const { widgetId } = action;
    const widgets = yield* select(selectors.raw.$rawLibraryWidgets);
    const widget = widgets[widgetId];

    if (!widget) {
        return;
    }

    const { tags } = widget;

    const placeholderType = getWidgetTypeFromTags(tags) || '';

    yield* put({
        type: 'ELEMENT_ADD',
        placeholderType,
    });

    yield take('SET_INSTANCESBLOCK');

    yield switchWidgetForElement({
        type: 'ELEMENT_WIDGET_SELECT',
        widgetId,
    });
}

function* elementWidgetSelect(action: ActionWidgetSelect) {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const selectedInstanceId = currentIds.selectedInstanceId;

    if (!selectedInstanceId) {
        return;
    }

    if (selectedInstanceId === '<NEW>') {
        yield call(addElementWithWidget, action);
    } else {
        yield call(switchWidgetForElement, action);
    }
}

export function* root() {
    yield takeEvery('ELEMENT_WIDGET_SELECT', elementWidgetSelect);
}

const getWidgetTypeFromTags = (tags: string[] = []) => {
    const firstTypeTag = tags.find((item) => item.match(/type-[a-z]+/i));
    return firstTypeTag?.replace('type-', '');
};
