import React, { useMemo } from 'react';
import { Container } from './Mixer.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { translateItems, useTranslation } from '../../config/translation';

export type MixerProps = {
    header: string;
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
    customView?: React.FC<any>;
    customView2?: React.FC<any>;
};

export function Mixer(props: MixerProps) {
    const {
        header,
        data,
        callbacks,
        allOptions,
        dispatch,
        customView,
        customView2,
    } = props;

    const { t, i18n } = useTranslation();

    const translatedTools = useMemo(() => {
        return translateItems(tools, null, t);
    }, [tools]);

    return (
        <Container className='Mixer-container' data-testid='Mixer-container'>
            <Multi
                id='PageInstances'
                itemType='pageInstance'
                header={header}
                data={data}
                callbacks={callbacks}
                viewModes={['custom', 'custom2', 'table']}
                dispatch={dispatch}
                allOptions={allOptions}
                tools={translatedTools}
                customView={customView}
                customView2={customView2}
            />
        </Container>
    );
}

const tools: IToolbarItem[] = [
    {
        id: 'editPage',
        textKey: 'Edit',
        iconName: 'Edit',
    },

    {
        id: 'versions',
        textKey: 'Page versions',
        iconName: 'WaffleOffice365',
    },
    {
        id: 'gap1',
        isGap: true,
    },
    {
        id: 'download',
        textKey: 'Download JSON',
        iconName: 'Download',
    },
    {
        id: 'gap2',
        isGap: true,
    },

    {
        id: 'promoteInstance',
        textKey: 'Promote page to live',
        iconName: 'DoubleChevronUp8',
    },

    {
        id: 'preview',
        textKey: 'Show preview',
        iconName: 'OpenInNewTab',
    },
];

export default Mixer;
