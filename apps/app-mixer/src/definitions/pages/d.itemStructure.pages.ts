export const itemStructure = `export type IPage = {
    id: string;
    title: string;
    description: string;
    iconName?: string;
    status: PageStatus;
    order?: number;
    lastPublishDate?: string;
    pageInstanceId?: string;
    path: string;
    isProtected?: boolean;
    tags: string[];
    dataTags: string[];
    enabled?: boolean;
    templateId?: TemplateId;
};`;
