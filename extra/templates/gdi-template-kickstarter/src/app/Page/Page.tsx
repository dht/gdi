import React from 'react';
import Footer from '../../blocks/Footer/Footer';
import GroundDivider from '../../blocks/GroundDivider/GroundDivider';
import Header from '../../blocks/Header/Header';
import Hero from '../../blocks/Hero/Hero';
import HudExperience from '../../blocks/HudExperience/HudExperience';
import { datasetHud } from '../../blocks/HudExperience/HudExperience.data';
import Instush from '../../blocks/Instush/Instush';
import Movement from '../../blocks/Movement/Movement';
import ReviewTalk from '../../blocks/ReviewTalk/ReviewTalk';
import UserBar from '../../blocks/UserBar/UserBar';
import YouCompleteMe from '../../blocks/YouCompleteMe/YouCompleteMe';
import Features from '../../components/Features/Features';
import { datasetFeatures } from '../../components/Features/Features.data';
import { Wrapper } from './Page.style';

export type PageProps = {};

export function Page(props: PageProps) {
    return (
        <Wrapper className='Page-wrapper' data-testid='Page-wrapper'>
            <UserBar />
            <Hero />
            <GroundDivider />
            <ReviewTalk />
            <YouCompleteMe />
            <Instush />
            <Movement />
            <Footer />
        </Wrapper>
    );
}

export default Page;
