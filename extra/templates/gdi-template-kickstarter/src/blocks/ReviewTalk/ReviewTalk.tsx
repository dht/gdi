import React from 'react';
import {
    Header,
    IFrame,
    Location,
    Next,
    Text,
    Wrapper,
} from './ReviewTalk.style';
import { useWindowSize } from 'react-use';
import Stars from '../../components/Stars/Stars';

export type ReviewTalkProps = {};

export function ReviewTalk(_props: ReviewTalkProps) {
    const { width, height } = useWindowSize();

    return (
        <Wrapper
            className='ReviewTalk-wrapper'
            data-testid='ReviewTalk-wrapper'
        >
            <Header>
                <Text>
                    Jason McBright, <span>29</span>
                </Text>
                <Location>Oklahoma</Location>
            </Header>
            <IFrame
                width={width / 3}
                height={height / 3}
                src='https://www.youtube.com/embed/O3EplEYzvBY'
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></IFrame>

            <Next>
                <i className='material-icons'>chevron_right</i>
            </Next>
        </Wrapper>
    );
}

export default ReviewTalk;
