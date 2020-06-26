export const FAIL = "FETCH_FAIL";
export const SUCCESS = "FETCH_SUCCESS";
export const FETCH_ALL = "FETCH_ALL";
export const FETCH_BY_ID = "FETCH_BY_ID";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export type Task = {
  id?: number;
  name: string;
  priority: number;
  column: number;
};

export type CardFetchAll = {
  type: typeof FETCH_ALL;
};

export type CardFetchById = {
  type: typeof FETCH_BY_ID;
};

export type CardCreate = {
  type: typeof CREATE;
};

export type CardUpdate = {
  type: typeof UPDATE;
};

export type CardDelete = {
  type: typeof DELETE;
};

export type CardFail = {
  type: typeof FAIL;
  error: any;
};

export type CardSuccess = {
  type: typeof SUCCESS;
  payload?: Array<Task> | Task;
};

export type CardDispatchTypes =
  | CardFetchAll
  | CardFetchById
  | CardFail
  | CardCreate
  | CardUpdate
  | CardDelete
  | CardSuccess;
