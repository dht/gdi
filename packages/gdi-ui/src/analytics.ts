import { sendAnalytics } from './globals';

type Params = {
  testId?: string;
  analyticsId?: string;
  analyticsSelectorId?: string;
  analyticsParams?: Json;
};

export const sendButtonClickAnalytics = (
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  params: Params
) => {
  const { testId, analyticsId, analyticsSelectorId, analyticsParams = {} } = params;

  if (!sendAnalytics || !analyticsId) {
    return;
  }

  const { currentTarget } = ev;

  const path = document.location.pathname;

  sendAnalytics(analyticsId, {
    path,
    testId,
    selectorId: analyticsSelectorId,
    ...analyticsParams,
  });
};
