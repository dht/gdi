import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const VoiceContainer = React.lazy(() => import('../containers/VoiceContainer')); // prettier-ignore
const VoiceTopContainer = React.lazy(() => import('../containers/VoiceTopContainer')); // prettier-ignore
const SpeakerContainer = React.lazy(() => import('../containers/SpeakerContainer')); // prettier-ignore
const TranscriptContainer = React.lazy(() => import('../containers/TranscriptContainer')); // prettier-ignore

export enum VoiceWidgets {
    Voice = 'voice.Voice',
    Speaker = 'voice.Speaker',
    VoiceTop = 'voice.VoiceTop',
    Transcript = 'voice.Transcript',
}
export const widgets: IWidget[] = [
    {
        id: VoiceWidgets.Voice,
        name: 'Voice',
        description: 'Voice',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={VoiceContainer} props={props} />
        ),
    },
    {
        id: VoiceWidgets.Speaker,
        name: 'Speaker',
        description: 'Speaker',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={SpeakerContainer}
                props={props}
            />
        ),
    },
    {
        id: VoiceWidgets.VoiceTop,
        name: 'VoiceTop',
        description: 'VoiceTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={VoiceTopContainer}
                props={props}
            />
        ),
    },
    {
        id: VoiceWidgets.Transcript,
        name: 'Transcript',
        description: 'Transcript',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={TranscriptContainer}
                props={props}
            />
        ),
    },
];
