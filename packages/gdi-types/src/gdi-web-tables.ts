// AUTO-GENERATED

export const A15 = {};

declare global {
    export type CellType =
        | 'image'
        | 'person'
        | 'number'
        | 'text'
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
        header: string;
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
        tableConfig: ITableConfig;
        newForm: IFormConfig;
        editForm: IFormConfig;
        dataNewDefault?: Json;
    };

    export type DataGridField = {
        id: string;
        title?: string;
        cellType: CellType;
        mapFields?: Json;
        flex?: number;
        params?: Json;
    };

    export type DataGridConfig = {
        id: string;
        fields: DataGridField[];
    };
}
