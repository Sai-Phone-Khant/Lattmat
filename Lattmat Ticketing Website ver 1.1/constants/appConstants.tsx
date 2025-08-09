export const LOADING_MESSAGES = {
  EVENT_DETAILS: "Loading event details...",
  GENERAL: "Loading..."
} as const;

export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  EVENT: '/event/:id',
  PAYMENT: '/payment',
  PURCHASE_INFO: '/purchase-info'
} as const;