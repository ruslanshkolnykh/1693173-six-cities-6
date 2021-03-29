export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_ITEMS_AMOUNT: `changeItemsAmount`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const ActionCreator = {
  changeCity: (cityProp) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityProp
  }),
  changeItemsAmount: (amount) => ({
    type: ActionType.CHANGE_ITEMS_AMOUNT,
    payload: amount
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
};
