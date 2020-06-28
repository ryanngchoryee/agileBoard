import {
  Card,
  CARD_ACTION_TYPES,
  CardDispatchTypes,
} from "../actions/cardActionTypes";

type CardDefaultStateI = {
  loading: boolean;
  card?: Array<Card>;
};

const defaultState: CardDefaultStateI = {
  loading: false,
};

export const cardReducer = (
  state: CardDefaultStateI = defaultState,
  action: CardDispatchTypes
): CardDefaultStateI => {
  switch (action.type) {
    case CARD_ACTION_TYPES.CARD_LOADING:
      return {
        loading: true,
      };
    case CARD_ACTION_TYPES.CARD_FAIL:
      return {
        loading: false,
      };
    case CARD_ACTION_TYPES.CARD_FETCH_ALL:
      return {
        loading: true,
        card: action.payload,
      };
    default:
      return state;
  }
};
