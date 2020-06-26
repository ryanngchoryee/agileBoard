import {
  Task,
  DispatchTypes,
  FETCH_ALL,
  FETCH_BY_ID,
  CREATE,
  UPDATE,
  DELETE,
  FAIL,
  SUCCESS,
} from "../actions/actionTypes";

type DefaultStateI = {
  loading: boolean;
  card?: Array<Task> | Task;
};

const defaultState: DefaultStateI = {
  loading: false,
};

export const cardReducer = (
  state: DefaultStateI = defaultState,
  action: DispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case FAIL:
      return {
        loading: false,
      };
    case FETCH_ALL:
      return {
        loading: true,
      };
    case FETCH_BY_ID:
      return {
        loading: true,
      };
    case CREATE:
      return {
        loading: true,
      };
    case UPDATE:
      return {
        loading: true,
      };
    case DELETE:
      return {
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        card: action.payload,
      };
    default:
      return state;
  }
};
