type AnalyticsMethod = (eventId: string, params?: Json) => void;

export let sendAnalytics: AnalyticsMethod;

export const setAnalyticsMethod = (method: AnalyticsMethod) => {
  sendAnalytics = method;
};
