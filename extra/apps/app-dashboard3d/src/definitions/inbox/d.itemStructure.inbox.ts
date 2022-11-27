export const itemStructure = `export type IInboxMessage = {
    id: string;
    date: string;
    title: string;
    description: string;
    iconName?: string;
    color?: string;
    messageType: InboxMessageType;
    itemType?: ItemType;
    itemId?: string;
    href?: string;
};`;
