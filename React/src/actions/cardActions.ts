import { Dispatch } from "redux";
import {
  CardDispatchTypes,
  FETCH_ALL,
  FETCH_BY_ID,
  FAIL,
  SUCCESS,
  Task,
} from "./cardActionTypes";
import axios from "axios";

const baseURL = "http://localhost:51098/api/card/";

export const getAllCard = () => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  dispatch({
    type: FETCH_ALL,
  });

  await axios
    .get(baseURL)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: FAIL,
        error: e,
      })
    );
};

export const getCardById = (id: string) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  dispatch({
    type: FETCH_BY_ID,
  });

  await axios
    .get(`${baseURL}${id}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: FAIL,
        error: e,
      })
    );
};

export const createCard = (newRecord: Task) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  dispatch({
    type: FETCH_BY_ID,
  });

  await axios
    .post(`${baseURL}`, newRecord)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: FAIL,
        error: e,
      })
    );
};

export const updateCard = (id: string, newRecord: Task) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  dispatch({
    type: FETCH_BY_ID,
  });

  await axios
    .put(`${baseURL}${id}`, newRecord)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: FAIL,
        error: e,
      })
    );
};

export const deleteCard = (id: string) => async (
  dispatch: Dispatch<CardDispatchTypes>
) => {
  dispatch({
    type: FETCH_BY_ID,
  });

  await axios
    .delete(`${baseURL}${id}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: FAIL,
        error: e,
      })
    );
};

