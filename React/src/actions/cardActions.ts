import { Dispatch } from "redux";
import {
  DispatchTypes,
  FETCH_ALL,
  FETCH_BY_ID,
  CREATE,
  UPDATE,
  DELETE,
  FAIL,
  SUCCESS,
  Task,
} from "./actionTypes";
import axios from "axios";

const baseURL = "http://localhost:51098/api/card/";

export const getAllCard = () => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: FETCH_ALL,
  });

  await axios
    .get(baseURL)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: FAIL
      })
    );
};

export const getCardById = (id: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: FETCH_BY_ID,
  });

  await axios
    .get(`${baseURL}${id}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: FAIL
      })
    );
};

export const createCard = (newRecord: Task) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: CREATE,
  });

  await axios
    .post(`${baseURL}`, newRecord)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: FAIL
      })
    );
};

export const updateCard = (id: string, newRecord: Task) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: UPDATE,
  });

  await axios
    .put(`${baseURL}${id}`, newRecord)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: FAIL
      })
    );
};

export const deleteCard = (id: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: DELETE,
  });

  await axios
    .delete(`${baseURL}${id}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(() =>
      dispatch({
        type: FAIL
      })
    );
};

