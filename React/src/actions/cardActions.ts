import { Dispatch } from "redux";
import axios from "axios";
import { Card, CARD_ACTION_TYPES, CardDispatchTypes } from "./cardActionTypes";

const baseURL = "http://localhost:51098/api/card/";

export const card = {
  getAllCard: () => async (dispatch: Dispatch<CardDispatchTypes>) => {
    dispatch({
      type: CARD_ACTION_TYPES.CARD_LOADING,
    });
    await axios
      .get(baseURL)
      .then((res) => {
        dispatch({
          type: CARD_ACTION_TYPES.CARD_FETCH_ALL,
          payload: res.data,
        });
      })
      .catch(() =>
        dispatch({
          type: CARD_ACTION_TYPES.CARD_FAIL,
        })
      );
  },

  createCard: (newRecord: Card) => async (
    dispatch: Dispatch<CardDispatchTypes>
  ) => {
    dispatch({
      type: CARD_ACTION_TYPES.CARD_LOADING,
    });

    await axios
      .post(`${baseURL}`, newRecord)
      .then((res) => {
        dispatch({
          type: CARD_ACTION_TYPES.CARD_CREATE,
          payload: res.data,
        });
      })
      .catch(() =>
        dispatch({
          type: CARD_ACTION_TYPES.CARD_FAIL,
        })
      );
  },

  updateCard: (id: string, newRecord: Card) => async (
    dispatch: Dispatch<CardDispatchTypes>
  ) => {
    dispatch({
      type: CARD_ACTION_TYPES.CARD_LOADING,
    });
    await axios
      .put(`${baseURL}${id}`, newRecord)
      .then(() => {
        console.log(newRecord);
        dispatch({
          type: CARD_ACTION_TYPES.CARD_UPDATE,
          payload: { id: parseInt(id), record: newRecord },
        });
      })
      .catch(() =>
        dispatch({
          type: CARD_ACTION_TYPES.CARD_FAIL,
        })
      );
  },

  deleteCard: (id: string) => async (dispatch: Dispatch<CardDispatchTypes>) => {
    dispatch({
      type: CARD_ACTION_TYPES.CARD_LOADING,
    });
    await axios
      .delete(`${baseURL}${id}`)
      .then(() => {
        dispatch({
          type: CARD_ACTION_TYPES.CARD_DELETE,
          payload: parseInt(id),
        });
      })
      .catch(() =>
        dispatch({
          type: CARD_ACTION_TYPES.CARD_FAIL,
        })
      );
  },
};

// getCardById: (id: string) => async (
//   dispatch: Dispatch<CardDispatchTypes>
// ) => {
//   dispatch({
//     type: CARD_ACTION_TYPES.CARD_FETCH_BY_ID,
//   });
//   await axios
//     .get(`${baseURL}${id}`)
//     .then((res) => {
//       dispatch({
//         type: CARD_ACTION_TYPES.CARD_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch(() =>
//       dispatch({
//         type: CARD_ACTION_TYPES.CARD_FAIL,
//       })
//     );
// },
