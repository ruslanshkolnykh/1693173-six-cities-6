export const ActionType = {
  CHANGE_CITY: `changeCity`,
  FILL_OFFERS: `fillOffers`,
  CHANGE_ITEMS_AMOUNT: `changeItemsAmount`,
  LOAD_OFFERS: `loadOffers`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
};

export const ActionCreator = {
  changeCity: (cityProp) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityProp
  }),
  fillOffers: (cityProp) => ({
    type: ActionType.FILL_OFFERS,
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
