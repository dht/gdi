export enum WebRoute {
    HOME = '/',
    BOARD_DETAILS = '/board/:id',
}

export const routes: Record<WebRoute, string> = {
    [WebRoute.HOME]: 'home',
    [WebRoute.BOARD_DETAILS]: 'boardDetails',
};
