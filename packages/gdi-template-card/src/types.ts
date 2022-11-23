export type ICardConfig = {
    layout: LayoutFlavour;
    mainMenu: IMainMenuConfig;
    bottomBar: IBottomBarConfig;
};

export type IBottomBarConfig = {
    flavour: BottomBarFlavour;
    showText: boolean;
    backgroundColor: string;
    color: string;
};

export type IMainMenuConfig = {
    iconSet: IconSet;
    color?: string;
};

export type ICardData = {
    fullName: string;
    jobTitle: string;
    urls: ICardUrl[];
    actions: ICardAction[];
    images: Record<string, string>;
};

export type IconSet = 'phone' | 'outline' | 'rect' | 'solid' | 'ovals';

export type BottomBarFlavour = 'floating' | 'tabBar';

export type LayoutFlavour = 'revealHero';

export type CardUrlType =
    | 'linkedIn'
    | 'twitter'
    | 'github'
    | 'website'
    | 'email'
    | 'phone'
    | 'instagram'
    | 'whatsapp'
    | 'facebook'
    | 'aboutMe'
    | 'waze'
    | 'deepLink';

export type ICardUrl = {
    id: string;
    urlType: CardUrlType;
    content: string;
};

export type CardActionType = 'save' | 'sendContact' | 'call';

export type ICardAction = {
    id: string;
    actionType: CardActionType;
};
