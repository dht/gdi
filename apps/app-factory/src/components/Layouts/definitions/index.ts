import mainTableConfig from './Layouts.table.main.json';
import mainFormNew from './Layouts.form.main.new.json';
import mainFormEdit from './Layouts.form.main.edit.json';

import subTableConfig from './Layouts.table.sub.json';
import subFormNew from './Layouts.form.sub.new.json';
import subFormEdit from './Layouts.form.sub.edit.json';

export const definitions: ICrudDefinitions = {
    withSubCollection: true,
    mainTrio: {
        tableConfig: mainTableConfig,
        newForm: mainFormNew,
        editForm: mainFormEdit,
    },
    subTrio: {
        tableConfig: subTableConfig,
        newForm: subFormNew,
        editForm: subFormEdit,
    },
};
