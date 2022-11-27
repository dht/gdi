import { collection_all } from 'redux-store-generator';
import { prompt } from '@gdi/web-base-ui';
import { DispatchContext } from '../context/Dispatch.context';
import { guid4 } from 'shared-base';
import { ICrudOptions } from '../types';
import { useTranslation } from '@gdi/language';
import { useContext, useMemo } from '@gdi/hooks';

export function useCrudOperations(
    config: ICrudDefinitions,
    data: Json,
    options: ICrudOptions
) {
    const { nodeName, formNew, formNewDefault, formEdit, pieMenu } = config;

    const contextDispatch = useContext(DispatchContext);
    const { tj, t } = useTranslation();

    const dispatch = contextDispatch.callbacks.dispatch;

    const actions = useMemo(() => {
        return collection_all(nodeName);
    }, []);

    const callbacks = useMemo(
        () => ({
            createForm: async () => {
                const result = await prompt.form({
                    title: 'New item',
                    form: {
                        config: formNew,
                        data: { ...formNewDefault, ...options.newDataExtra },
                        allOptions: tj(options.allOptions ?? {}),
                        allDetails: options.allDetails,
                        allMethods: options.allMethods,
                    },
                });

                if (result.didCancel) {
                    return;
                }
                const { value } = result;
                dispatch(actions.add(value as Json));
            },
            editForm: async (id: string | string[]) => {
                const editId = Array.isArray(id) ? id[0] : id;

                const itemData = data.find((item: Json) => item.id === editId);

                if (!itemData) {
                    return;
                }

                const result = await prompt.form({
                    title: 'Edit item',
                    form: {
                        config: formEdit,
                        data: itemData,
                        allOptions: tj(options.allOptions ?? {}),
                        allDetails: options.allDetails,
                        allMethods: options.allMethods,
                    },
                });

                if (result.didCancel) {
                    return;
                }

                const { value } = result;

                dispatch(actions.patch(editId, value as Json));
            },
            deleteForm: async (id: string | string[]) => {
                const deleteIds = Array.isArray(id) ? id : [id];
                const count = deleteIds.length;

                const existingItems = data.filter((i: Json) =>
                    deleteIds.includes(i.id)
                );

                if (count === 0 || existingItems.length === 0) {
                    return;
                }

                const message = count === 1 ? 'delete this item' : `delete ${count} items`; // prettier-ignore
                const title = count === 1 ? 'Delete item' : 'Delete items';

                const { didCancel } = await prompt.confirm({
                    title,
                    description: `Are you sure you want to ${message}?`,
                    submitButtonText: "I'm sure",
                });

                if (didCancel) {
                    return;
                }

                for (let itemId of deleteIds) {
                    dispatch(actions.delete(itemId));
                }
            },
            addTag: (id: string, params: Json) => {
                const { tag } = params;
                const item = data.find((item: Json) => item.id === id);

                if (!item) {
                    return;
                }

                const tags = [...(item.tags ?? []), tag];
                item.tags = tags;
                dispatch(actions.patch(id, { tags }));
            },
            removeTag: (id: string, params: Json) => {
                const { tag } = params;
                const item = data.find((item: Json) => item.id === id);

                if (!item) {
                    return;
                }

                const tags = [...(item.tags ?? [])].filter((t) => t !== tag);
                item.tags = tags;
                dispatch(actions.patch(id, { tags }));
            },
            addDataTag: (id: string, params: Json) => {
                const { tags } = params;
                const item = data.find((item: Json) => item.id === id);

                if (!item) {
                    return;
                }

                const dataTags = [...item.dataTags, ...tags];
                dispatch(actions.patch(id, { dataTags }));
            },
            removeDataTag: (id: string, params: Json) => {
                const { tags } = params;
                const item = data.find((item: Json) => item.id === id);

                if (!item) {
                    return;
                }

                const dataTags = [...item.dataTags].filter(
                    (t) => !tags.includes(t)
                );
                dispatch(actions.patch(id, { dataTags }));
            },
            replaceDataTags: (id: string, params: Json) => {
                const { tags } = params;
                const item = data.find((item: Json) => item.id === id);

                if (!item) {
                    return;
                }

                dispatch(actions.patch(id, { dataTags: tags }));
            },
            create: (params?: Json) => {
                dispatch(
                    actions.add({
                        id: guid4(),
                        ...params,
                        ...formNewDefault,
                        ...options.newDataExtra,
                    })
                );
            },
            edit: (params?: Json) => {
                if (!params) {
                    return;
                }

                dispatch(actions.patch(params.id, params));
            },
            duplicate: async (id: string) => {
                const { didCancel, value } = await prompt.input({
                    title: 'Duplicate Page',
                    placeholder: "New page's name",
                    submitButtonText: 'Duplicate',
                });

                if (didCancel || !value) {
                    return;
                }

                dispatch({
                    type: 'DUPLICATE_PAGE',
                    title: value,
                    itemId: id,
                });
            },
            change: (id: string, change: Json) => {
                dispatch(actions.patch(id, change));
            },
            showMenu: async (itemId: string, point?: Json) => {
                const options: IOption[] = tj(
                    (pieMenu ?? {}).options ?? {}
                ) as IOption[];

                const { didCancel, value } = await prompt.pie({
                    title: '',
                    options,
                    point,
                });

                if (didCancel || !value) {
                    return;
                }

                const type = ['ITEM_ACTION', 'person', (value as Json).id]
                    .join('_')
                    .toUpperCase();

                const item = data.find((item: Json) => item.id === itemId);

                dispatch({
                    type,
                    itemId,
                    item,
                });
            },
        }),
        [data, options]
    );

    return callbacks;
}
