import tableConfig from './Layouts.table.json';
import formNew from './Layouts.form.new.json';
import formEdit from './Layouts.form.edit.json';
import formNewDefault from './Layouts.form.new.default.json';

export const definitions: Partial<ICrudDefinitions> = {
    nodeName: 'Layouts',
    table: tableConfig, // @ts-expect-error
    formNew, // @ts-expect-error
    formEdit,
    formNewDefault,
};
