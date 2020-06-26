import { Dispatch } from "redux";
import {
    Column,
    DispatchTypes,
    FETCH_ALL,
    FETCH_BY_ID,
    CREATE,
    UPDATE,
    DELETE,
    FAIL,
    SUCCESS,
} from "../actions/actionTypes";
import axios from "axios";

const baseURL = "http://localhost:51098/api/column/";

export const getAllColumn = () => async (
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

export const getColumnById = (id: string) => async (
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

export const createColumn = (newRecord: Column) => async (
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

export const updateColumn = (id: string, newRecord: Column) => async (
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

export const deleteColumn = (id: string) => async (
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
