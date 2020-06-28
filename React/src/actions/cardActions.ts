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
      .then((_) => {
        card.getAllCard();
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
      .then((_) => {
        card.getAllCard();
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
      .then((_) => {
        card.getAllCard();
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
