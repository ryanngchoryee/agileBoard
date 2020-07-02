type CardActionTypes = {
  CARD_LOADING: string;
  CARD_FAIL: string;
  CARD_FETCH_ALL: string;
  CARD_FETCH_BY_ID: string;
  CARD_CREATE: string;
  CARD_UPDATE: string;
  CARD_DELETE: string;
};

export const CARD_ACTION_TYPES: CardActionTypes = {
  CARD_LOADING: "CARD_LOADING",
  CARD_FAIL: "CARD_FAIL",
  CARD_FETCH_ALL: "CARD_FETCH_ALL",
  CARD_FETCH_BY_ID: "CARD_FETCH_BY_ID",
  CARD_CREATE: "CARD_CREATE",
  CARD_UPDATE: "CARD_UPDATE",
  CARD_DELETE: "CARD_DELETE",
};

export type Card = {
  id?: number;
  name: string;
  priority?: number;
  column?: number;
};

export type CardDispatchTypes = {
  type:
    | typeof CARD_ACTION_TYPES.CARD_LOADING
    | typeof CARD_ACTION_TYPES.CARD_FAIL
    | typeof CARD_ACTION_TYPES.CARD_FETCH_ALL
    | typeof CARD_ACTION_TYPES.CARD_FETCH_BY_ID
    | typeof CARD_ACTION_TYPES.CARD_CREATE
    | typeof CARD_ACTION_TYPES.CARD_UPDATE
    | typeof CARD_ACTION_TYPES.CARD_DELETE;
  payload?: any;
};
