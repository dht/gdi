export type CellType =
    | 'image'
    | 'person'
    | 'number'
    | 'text'
    | 'tags'
    | 'date'
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
};

export type ICrudTrio = {
    tableConfig: ITableConfig;
    newForm: IFormConfig;
    editForm: IFormConfig;
};

export type ICrudDefinitions = {
    withSubCollection: boolean;
    mainTrio: ICrudTrio;
    subTrio?: ICrudTrio;
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
