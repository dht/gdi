import { Apps } from './Apps-basic/Apps';
import { widgetInfo as AppsInfo } from './Apps-basic';

import { Features } from './Features-basic/Features';
import { widgetInfo as FeaturesInfo } from './Features-basic';

import { Footer } from './Footer-basic/Footer';
import { widgetInfo as FooterInfo } from './Footer-basic';

import { Hero } from './Hero-basic/Hero';
import { widgetInfo as HeroInfo } from './Hero-basic';

import { PageApp } from './PageApp-basic/PageApp';
import { widgetInfo as PageAppInfo } from './PageApp-basic';

import { PageTemplate } from './PageTemplate-basic/PageTemplate';
import { widgetInfo as PageTemplateInfo } from './PageTemplate-basic';

import { Templates } from './Templates-basic/Templates';
import { widgetInfo as TemplatesInfo } from './Templates-basic';

import { TopHeader } from './TopHeader-basic/TopHeader';
import { widgetInfo as TopHeaderInfo } from './TopHeader-basic';

import { Twins } from './Twins-basic/Twins';
import { widgetInfo as TwinsInfo } from './Twins-basic';


export const blocks: IWidgets = {    
      'com.usegdi.templates.gdi.apps-basic': {
    component: Apps,
    ...AppsInfo
  },
  'com.usegdi.templates.gdi.features-basic': {
    component: Features,
    ...FeaturesInfo
  },
  'com.usegdi.templates.gdi.footer-basic': {
    component: Footer,
    ...FooterInfo
  },
  'com.usegdi.templates.gdi.hero-basic': {
    component: Hero,
    ...HeroInfo
  },
  'com.usegdi.templates.gdi.pageApp-basic': {
    component: PageApp,
    ...PageAppInfo
  },
  'com.usegdi.templates.gdi.pageTemplate-basic': {
    component: PageTemplate,
    ...PageTemplateInfo
  },
  'com.usegdi.templates.gdi.templates-basic': {
    component: Templates,
    ...TemplatesInfo
  },
  'com.usegdi.templates.gdi.topHeader-basic': {
    component: TopHeader,
    ...TopHeaderInfo
  },
  'com.usegdi.templates.gdi.twins-basic': {
    component: Twins,
    ...TwinsInfo
  },
};
