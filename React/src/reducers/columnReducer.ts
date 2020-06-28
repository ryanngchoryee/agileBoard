import {
  Column,
  COLUMN_ACTION_TYPES,
  ColumnDispatchTypes,
} from "../actions/columnActionTypes";

type ColumnDefaultStateI = {
  loading: boolean;
  column?: Array<Column>;
};

const defaultState: ColumnDefaultStateI = {
  loading: false,
};

export const columnReducer = (
  state: ColumnDefaultStateI = defaultState,
  action: ColumnDispatchTypes
): ColumnDefaultStateI => {
  switch (action.type) {
    case COLUMN_ACTION_TYPES.COLUMN_LOADING:
      return {
        loading: true,
      };
    case COLUMN_ACTION_TYPES.COLUMN_FAIL:
      return {
        loading: false,
      };
    case COLUMN_ACTION_TYPES.COLUMN_FETCH_ALL:
      return {
        loading: false,
        column: action.payload,
      };
    default:
      return state;
  }
};
