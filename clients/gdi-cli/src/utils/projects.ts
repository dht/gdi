import globby from 'globby';
import path from 'path';

export const getProjects = (cwd: string) => {
    return globby
        .sync(['packages/*', 'clients/*', 'servers/*'], {
            cwd,
            onlyDirectories: true,
        })
        .map((dirPath) => {
            const pathInfo = path.parse(dirPath);
            return pathInfo.base;
        });
};
