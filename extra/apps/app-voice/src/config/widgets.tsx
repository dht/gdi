import React from 'react';
import { IWidget } from '@gdi/platformer';
import { VoiceContainer } from '../containers/VoiceContainer';
import { VoiceTopContainer } from '../containers/VoiceTopContainer';
import { SpeakerContainer } from '../containers/SpeakerContainer';
import { TranscriptContainer } from '../containers/TranscriptContainer';

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
        component: (props: any) => <VoiceContainer {...props} />,
    },
    {
        id: VoiceWidgets.Speaker,
        name: 'Speaker',
        description: 'Speaker',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <SpeakerContainer {...props} />,
    },
    {
        id: VoiceWidgets.Viz,
        name: 'Viz',
        description: 'Viz',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <VizContainer {...props} />,
    },
    {
        id: VoiceWidgets.VoiceTop,
        name: 'VoiceTop',
        description: 'VoiceTop',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <VoiceTopContainer {...props} />,
    },
    {
        id: VoiceWidgets.Transcript,
        name: 'Transcript',
        description: 'Transcript',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <TranscriptContainer {...props} />,
    },
];
