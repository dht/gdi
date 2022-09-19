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
