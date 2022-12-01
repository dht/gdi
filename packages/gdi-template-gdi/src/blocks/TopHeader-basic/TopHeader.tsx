import React, { useContext } from 'react';
import { Container, Flex, Github, Logo, Svg, Wrapper } from './TopHeader.style';
import TopMenu from '../../components/TopMenu/TopMenu';
import SocialMenu from '../../components/SocialMenu/SocialMenu';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.templates.gdi.topHeader-basic';

export type TopHeaderProps = {
    strings: TopHeaderStrings;
    colors: TopHeaderColors;
    extra: TopHeaderExtra;
};

export type TopHeaderStrings = {};

export type TopHeaderColors = {};

export type TopHeaderExtra = {
    logoUrl: string;
    githubUrl?: string;
    socialDatasetId?: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { strings, colors, extra } = props;
    const { logoUrl, githubUrl, socialDatasetId = '' } = extra;
    const { menuItems } = useContext(SiteContext);

    const socialLinks = useDataset(socialDatasetId);

    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
        >
            <Logo src={logoUrl} alt='logo' />
            <Wrapper>
                <TopMenu items={menuItems} />
                <Flex />
                <SocialMenu items={socialLinks} />
                {githubUrl && (
                    <Github href={githubUrl} target='_blank'>
                        <img
                            width='28px'
                            height='28px'
                            alt='github'
                            src='https://static-b9ebe.web.app/github.svg'
                        />
                    </Github>
                )}
            </Wrapper>
            <Svg
                viewBox='0 0 1200 21'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g stroke='none' fill='none' fillRule='evenodd'>
                    <path
                        d='M0,10.8199991 C173.136426,3.71083303 362.249759,0.15625 567.34,0.15625 C772.430241,0.15625 983.316908,3.71083303 1200,10.8199991 L1200,20.15625 L0,20.15625 L0,10.8199991 Z'
                        id='Rectangle'
                        fill='#FFFFFF'
                    ></path>
                </g>
            </Svg>
        </Container>
    );
}

export default TopHeader;
