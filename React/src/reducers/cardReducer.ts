import {
  CARD_ACTION_TYPES,
  CardDispatchTypes,
  Card,
} from "../actions/cardActionTypes";

type CardDefaultStateI = {
  loading: boolean;
  card?: any;
};

const defaultState: CardDefaultStateI = {
  loading: false,
};

export const cardReducer = (
  state: CardDefaultStateI = defaultState,
  action: CardDispatchTypes
): CardDefaultStateI => {
  switch (action.type) {
    case CARD_ACTION_TYPES.CARD_FAIL:
      return {
        loading: false,
      };
    case CARD_ACTION_TYPES.CARD_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CARD_ACTION_TYPES.CARD_FETCH_ALL:
      return {
        loading: true,
        card: action.payload,
      };
    case CARD_ACTION_TYPES.CARD_CREATE:
      return {
        loading: false,
        card: [...state.card, action.payload],
      };
    case CARD_ACTION_TYPES.CARD_DELETE:
      return {
        loading: false,
        card: state.card.filter((c: Card) => {
          return c.id !== action.payload;
        }),
      };
    case CARD_ACTION_TYPES.CARD_UPDATE:
      return {
        loading: false,
        card: state.card.map((c: Card) => {
          return c.id === action.payload.id
            ? action.payload.record.column
              ? {
                  ...c,
                  name: action.payload.record.name,
                  column: action.payload.record.column,
                }
              : {
                  ...c,
                  name: action.payload.record.name,
                }
            : c;
        }),
      };

    default:
      return state;
  }
};
