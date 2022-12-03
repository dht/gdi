import { useContext, useMemo } from 'react';
import { Wrapper } from './Page.style';
import { Grid, IWidgetInstances, IWidgets } from 'igrid';
import { pickBy } from 'shared-base';
import { PlatformContext } from '../../core/Platform.context';
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
        <Wrapper className='Page-wrapper'>
            <Grid
                id='Page'
                darkMode={true}
                defaultInstances={instancesIngrid}
                widgets={widgetLibrary}
                flavour={flavour}
                ignoreWindowWidth={false}
            />
        </Wrapper>
    );
}

export const createPage = (pageId: string) => () => {
    const { instancesByPage, widgetLibrary } =
        useContext(PlatformContext).state;

    const instances = instancesByPage[pageId];

    const instancesIngrid = useMemo(() => {
        return pickBy(instances, (i) => typeof i.position !== 'undefined');
    }, [instances]);

    const instancesOverlays = useMemo(() => {
        return pickBy(instances, (i) => typeof i.overlayRoute !== 'undefined');
    }, [instances]);

    return (
        <Page
            instancesIngrid={instancesIngrid}
            instancesOverlays={instancesOverlays}
            widgetLibrary={widgetLibrary}
        />
    );
};
