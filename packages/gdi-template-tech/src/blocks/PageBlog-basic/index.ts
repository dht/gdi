import { params } from './meta/PageBlog.params';
import { sampleData } from './meta/PageBlog.sample';
import { dimensions } from './meta/PageBlog.dimensions';
import { screenshots } from './meta/PageBlog.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.pageBlog-basic',
    name: 'pageBlog-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-pageBlog'],
    dataTags: [],
    widgetType: 'pageBlog',
    isBlock: true,
};
