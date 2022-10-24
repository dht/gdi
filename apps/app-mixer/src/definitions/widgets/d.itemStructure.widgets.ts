export const itemStructure = `export type IWidget = {
    id: WidgetId;
    name: string;
    description?: string;
    component?: (props?: any) => JSX.Element;
    defaultDimension?: IDimension;
    tags?: string[];
    dataTags?: string[];
    widgetType?: string;
    params?: IWidgetParams;
    sampleData?: ISampleDataPerFlavour;
    dimensions?: IDimensionsPerFlavour;
    screenshots?: IScreenshotsPerFlavour;
    isBlock?: boolean;
};
`;
