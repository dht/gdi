// AUTO-GENERATED

export const A22 = {};

declare global {
    // =============== Tables ===============
    export type CellType =
        | 'image'
        | 'person'
        | 'number'
        | 'text'
        | 'icon'
        | 'tags'
        | 'date'
        | 'timeAgo'
        | 'id'
        | 'social';

    export type ITableField = {
        id: string;
        title?: string;
        cellType: CellType | string;
        mapFields?: Json;
        flex?: number;
        params?: Json;
    };

    export type ITableConfig = {
        id: string;
        header?: string;
        fields: ITableField[];
        tableActions?: ITableAction[];
        rowActions?: ITableRowAction[];
    };

    export type ITableAction = {
        id: string;
        iconName: string;
        title: string;
    };

    export type ITableRowAction = {
        id: string;
        iconName: string;
        title: string;
    };

    export type ICrudDefinitions = {
        nodeName: string;
        table: ITableConfig;
        formNew: IFormConfig;
        formNewDefault?: Json;
        formEdit: IFormConfig;
        filters: IFilterConfig;
        gallery?: IGalleryConfig;
        calendar?: ICalendarConfig;
        timeline?: ITimelineConfig;
        sheet?: ISheetConfig;
        overlay?: IOverlayConfig;
        bucket?: IBucketsConfig;
        pieMenu?: IPieMenuConfig;
        itemStructure?: string;
    };

    export type ICrudOptions = {
        doubleClickActionId: string; // ItemActionType;
        newDataExtra?: Json;
        allOptions?: Json;
        allDetails?: AllDetails;
        allMethods?: AllMethods;
    };

    export type ICrudDefinitionsPerItemType = Record<
        ItemType,
        ICrudDefinitions
    >;

    export type IViewMode =
        | 'table'
        | 'gallery'
        | 'spreadsheet'
        | 'timeline'
        | 'calendar'
        | 'buckets'
        | 'custom'
        | 'custom2';

    export type ICrudState = {
        viewMode: IViewMode;
    };

    export type ISheetConfig = IFormConfig;

    // =============== Galleries ===============
    export type IImage = {
        id: string;
        title: string;
        imageUrl: string;
        imageThumbUrl: string;
        ratio: number;
        tags: string[];
        dataTags: string[];
    };

    export type IImages = Record<string, IImage>;

    export type ItemActionType =
        | 'selection'
        | 'edit'
        | 'delete'
        | 'addTag'
        | 'removeTag'
        | 'mouse'
        | 'drillDown';

    export type ItemType =
        | 'article'
        | 'cart'
        | 'coupon'
        | 'image'
        | 'inbox'
        | 'event'
        | 'layout'
        | 'link'
        | 'order'
        | 'page'
        | 'pageInstance'
        | 'person'
        | 'post'
        | 'product'
        | 'project'
        | 'sale'
        | 'ticket'
        | 'template'
        | 'widget';

    export type IBarTool = 'edit' | 'delete';

    export type IBarAction = {
        id: string;
        title: string;
        iconName?: string;
        type: 'button' | 'iconButton';
    };

    export type IGalleryConfig = {
        id: string;
        sequence?: number;
        header?: string;
        columns?: number;
        fixedRatio?: number;
        itemType?: ItemType;
    };

    export type IGalleryOptions = {
        columns: number;
        selectionMode: ISelectionMode;
        allowMultiple?: boolean;
        allowEmpty?: boolean;
        hideOverlay?: boolean;
    };

    export type IGalleryState = {};

    // ================== Sheets ==================
    export type Coords = {
        rowIndex: number;
        columnIndex: number;
    };

    export type INode = {
        id: string;
        store: string;
        nodeType: string;
        fieldTypes: Record<string, string>;
        isHidden?: boolean;
    };

    export type INodes = Record<string, INode>;

    export type INodeWithColor = INode & {
        color: string;
    };

    // ================== Timeline ==================
    export type ITimelineConfig = {
        id: string;
        sequence?: number;
        header?: string;
        fields: ITableField[];
        fieldsGraph: ITableField[];
    };

    // ================== Calendar ==================
    export type ICalendarConfig = {
        id: string;
        sequence?: number;
        header?: string;
    };

    export type ICalendarOptions = {};

    export type ICalendarState = {};

    // ================== Filters ==================
    export type IFilterConfig = {
        id: string;
        fields: IFilterField[];
        sort?: ISortOption[];
    };

    export type IFilterOptions = {};

    export type IFilterValue = Record<string, string[]>;

    export type ISortValue = {
        id: string;
        direction: 'asc' | 'desc';
    };

    export type ISearchValue = string;

    export type ITrio = {
        sort: ISortValue;
        filter: IFilterValue;
        search: ISearchValue;
    };

    export type ISelectionMode =
        | 'browse'
        | 'single'
        | 'multiple'
        | 'collection';

    export type IFilterState = {
        header: string;
        tag?: string;
        showFilter: boolean;
        showPreview: boolean;
        trio: ITrio;
        allOptions?: Json;
        selectedIds: string[];
    };

    export type IFilterField = {
        id: string;
        title?: string;
        cellType: CellType | string;
        options?: IFilterOption[];
        optionSelectorId?: string;
        allowMultiple?: boolean;
    };

    export type IFilterOption = {
        id: string;
        text: string;
        value?: string | number;
        min?: number;
        max?: number;
    };

    export type ISortOption = {
        id: string;
        text: string;
        direction: 'asc' | 'desc';
    };

    // ================== Overlays ==================
    export type OverlayType = 'absolute' | 'centered';

    export type IOverlayField = {
        id: string;
        fieldId: string;
        fieldType: FieldType;
        locationKey?: string;
        order?: number;
    };

    export type IOverlayConfig = {
        id: string;
        sequence?: number;
        paddingBottom?: number;
        overlayType?: OverlayType;
        fields: IOverlayFields;
    };

    export type IOverlayFields = Record<string, IOverlayField>;

    // ================== General ==================
    export type WithChildren<T> = T & {
        children?: JSX.Element | JSX.Element[];
    };

    export type FilterPart =
        | 'header'
        | 'tools'
        | 'buttons'
        | 'tagging'
        | 'preview'
        | 'filter'
        | 'search';

    // ================== PieMenu ==================
    export type IPieMenuConfig = {
        itemType: ItemType;
        appSources?: string[];
        options: IOption[];
    };

    export type IPieMenuConfigPerItemType = Record<ItemType, IPieMenuConfig>;

    // ================== Buckets ==================
    export type IBucketDefinition = {
        id: string;
        title: string;
        dataTags: string[];
    };

    export type IBucketsPermutation = {
        id: string;
        title: string;
        buckets: IBucketDefinition[];
    };

    export type IBucketsConfig = {
        id: string;
        header: string;
        titleFieldId: string;
        permutations: IBucketsPermutation[];
    };
}
