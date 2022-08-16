import { useContext, useMemo } from 'react';
import { Container } from './Page.style';
import { Grid, IWidgetInstances, IWidgets } from 'igrid';
import { pickBy } from 'lodash';
import { PlatformContext } from '../../../core/platform-context';
import './Page.scss';

type PageProps = {
    instancesIngrid: IWidgetInstances;
    instancesOverlays: IWidgetInstances;
    widgetLibrary: IWidgets;
    flavour?: string;
};

export default function Page(props: PageProps) {
    const { instancesIngrid, widgetLibrary, flavour } = props;

    return (
        <Container className='Page-container'>
            <Grid
                id='Page'
                darkMode={true}
                defaultInstances={instancesIngrid}
                widgets={widgetLibrary}
                flavour={flavour}
            />
        </Container>
    );
}

export const createPage = (pageId: string) => () => {
    const { instancesByPage, widgetLibrary } = useContext(PlatformContext);

    const instances = instancesByPage[pageId];

    const instancesIngrid = useMemo(() => {
        return pickBy(instances, (i) => i.position);
    }, [instances]);

    const instancesOverlays = useMemo(() => {
        return pickBy(instances, (i) => i.overlayRoute);
    }, [instances]);

    return (
        <Page
            instancesIngrid={instancesIngrid}
            instancesOverlays={instancesOverlays}
            widgetLibrary={widgetLibrary}
        />
    );
};
