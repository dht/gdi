export const itemStructure = `export type ILayout = {
    id: string;
    name: string;
    items: IFlexEntities;
};

export type IFlexEntity = {
    id: string;
    parentId: string;
    locationId?: string;
    entityType: 'container' | 'item';
    direction?: 'row' | 'column';
    resolution: IResolution;
    order?: number;
    flex?: number;
    style?: Json;
    props?: Json;
    isLocked?: boolean;
};
`;
