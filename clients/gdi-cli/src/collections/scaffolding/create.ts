// shortcuts: create
// desc: generate scaffolding
import chalk from 'chalk';
import { scaffoldingVerbs } from '../../config/scaffoldingVerbs';
import middlewaresByEntityTypes from '../../middlewares';
import { middlewares as midBase } from '../../middlewares/midBase';
import { parseArgv } from '../../utils/argv';
import { streamer } from '../../utils/streamer';

const argv = parseArgv(process.argv);

type ValidTypes = 'widget' | 'site';

const entityType = argv._[0] as ValidTypes;
const isScaffolding = (scaffoldingVerbs as any)[entityType];

const midTemplate = middlewaresByEntityTypes.create[entityType];

if (!midTemplate) {
    console.log(chalk.red(`could not find template for "${entityType}"`));
    process.exit();
}

const stream = streamer(argv);

stream.use(midBase.input());
stream.use(midTemplate.preRun());
stream.use(midBase.scanTemplateFiles({ skip: !isScaffolding }));
stream.use(midTemplate.parseInstructions());
stream.use(midBase.writeFiles({ skip: !isScaffolding }));
stream.use(midTemplate.postRun());

stream.run();
