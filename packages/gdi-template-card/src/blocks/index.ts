import { Card } from './Card-basic/Card';
import { widgetInfo as CardInfo } from './Card-basic';


export const blocks: IWidgets = {    
      'com.usegdi.templates.card.card-basic': {
    component: Card,
    ...CardInfo
  },
};
