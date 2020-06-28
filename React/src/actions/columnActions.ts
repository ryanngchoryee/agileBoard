import { Dispatch } from "redux";
import axios from "axios";
import {
  Column,
  COLUMN_ACTION_TYPES,
  ColumnDispatchTypes,
} from "./columnActionTypes";

const baseURL = "http://localhost:51098/api/column/";

export const column = {
  getAllColumn: () => async (dispatch: Dispatch<ColumnDispatchTypes>) => {
    dispatch({
      type: COLUMN_ACTION_TYPES.COLUMN_LOADING,
    });

    await axios
      .get(baseURL)
      .then((res) => {
        dispatch({
          type: COLUMN_ACTION_TYPES.COLUMN_FETCH_ALL,
          payload: res.data,
        });
      })
      .catch(() =>
        dispatch({
          type: COLUMN_ACTION_TYPES.COLUMN_FAIL,
        })
      );
  },
  createColumn: (newRecord: Column) => async (
    dispatch: Dispatch<ColumnDispatchTypes>
  ) => {
    dispatch({
      type: COLUMN_ACTION_TYPES.COLUMN_LOADING,
    });

    await axios
      .post(`${baseURL}`, newRecord)
      .then((_) => {
        column.getAllColumn();
      })
      .catch(() =>
        dispatch({
          type: COLUMN_ACTION_TYPES.COLUMN_FAIL,
        })
      );
  },
  updateColumn: (id: string, newRecord: Column) => async (
    dispatch: Dispatch<ColumnDispatchTypes>
  ) => {
    dispatch({
      type: COLUMN_ACTION_TYPES.COLUMN_LOADING,
    });

    await axios
      .put(`${baseURL}${id}`, newRecord)
      .then((res) => {
        column.getAllColumn();
      })
      .catch(() =>
        dispatch({
          type: COLUMN_ACTION_TYPES.COLUMN_FAIL,
        })
      );
  },
  deleteColumn: (id: string) => async (
    dispatch: Dispatch<ColumnDispatchTypes>
  ) => {
    dispatch({
      type: COLUMN_ACTION_TYPES.COLUMN_LOADING,
    });

    await axios
      .delete(`${baseURL}${id}`)
      .then((res) => {
        column.getAllColumn();
      })
      .catch(() =>
        dispatch({
          type: COLUMN_ACTION_TYPES.COLUMN_FAIL,
        })
      );
  },
};

// getColumnById: (id: string) => async (
//   dispatch: Dispatch<ColumnDispatchTypes>
// ) => {
//   dispatch({
//     type: COLUMN_ACTION_TYPES.COLUMN_FETCH_BY_ID,
//   });

//   await axios
//     .get(`${baseURL}${id}`)
//     .then((res) => {
//       dispatch({
//         type: COLUMN_ACTION_TYPES.COLUMN_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch(() =>
//       dispatch({
//         type: COLUMN_ACTION_TYPES.COLUMN_FAIL,
//       })
//     );
// },
