import { AboutMe } from './AboutMe-basic/AboutMe';
import { widgetInfo as AboutMeInfo } from './AboutMe-basic';

import { ContactUs } from './ContactUs-basic/ContactUs';
import { widgetInfo as ContactUsInfo } from './ContactUs-basic';

import { CtaAction } from './CtaAction-basic/CtaAction';
import { widgetInfo as CtaActionInfo } from './CtaAction-basic';

import { Footer } from './Footer-basic/Footer';
import { widgetInfo as FooterInfo } from './Footer-basic';

import { Hero } from './Hero-basic/Hero';
import { widgetInfo as HeroInfo } from './Hero-basic';

import { MyNumbers } from './MyNumbers-basic/MyNumbers';
import { widgetInfo as MyNumbersInfo } from './MyNumbers-basic';

import { MyPortfolio } from './MyPortfolio-basic/MyPortfolio';
import { widgetInfo as MyPortfolioInfo } from './MyPortfolio-basic';

import { MyResume } from './MyResume-basic/MyResume';
import { widgetInfo as MyResumeInfo } from './MyResume-basic';

import { MyServices } from './MyServices-basic/MyServices';
import { widgetInfo as MyServicesInfo } from './MyServices-basic';

import { Quotes } from './Quotes-basic/Quotes';
import { widgetInfo as QuotesInfo } from './Quotes-basic';

import { SectionHeader } from './SectionHeader-basic/SectionHeader';
import { widgetInfo as SectionHeaderInfo } from './SectionHeader-basic';

import { Tester } from './Tester-basic/Tester';
import { widgetInfo as TesterInfo } from './Tester-basic';

import { TopHeader } from './TopHeader-basic/TopHeader';
import { widgetInfo as TopHeaderInfo } from './TopHeader-basic';


export const blocks: IWidgets = {    
      'com.usegdi.templates.starter.aboutMe-basic': {
    component: AboutMe,
    ...AboutMeInfo
  },
  'com.usegdi.templates.starter.contactUs-basic': {
    component: ContactUs,
    ...ContactUsInfo
  },
  'com.usegdi.templates.starter.ctaAction-basic': {
    component: CtaAction,
    ...CtaActionInfo
  },
  'com.usegdi.templates.starter.footer-basic': {
    component: Footer,
    ...FooterInfo
  },
  'com.usegdi.templates.starter.hero-basic': {
    component: Hero,
    ...HeroInfo
  },
  'com.usegdi.templates.starter.myNumbers-basic': {
    component: MyNumbers,
    ...MyNumbersInfo
  },
  'com.usegdi.templates.starter.myPortfolio-basic': {
    component: MyPortfolio,
    ...MyPortfolioInfo
  },
  'com.usegdi.templates.starter.myResume-basic': {
    component: MyResume,
    ...MyResumeInfo
  },
  'com.usegdi.templates.starter.myServices-basic': {
    component: MyServices,
    ...MyServicesInfo
  },
  'com.usegdi.templates.starter.quotes-basic': {
    component: Quotes,
    ...QuotesInfo
  },
  'com.usegdi.templates.starter.sectionHeader-basic': {
    component: SectionHeader,
    ...SectionHeaderInfo
  },
  'com.usegdi.templates.starter.tester-basic': {
    component: Tester,
    ...TesterInfo
  },
  'com.usegdi.templates.starter.topHeader-basic': {
    component: TopHeader,
    ...TopHeaderInfo
  },
};
