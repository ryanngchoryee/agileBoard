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
  priority?: number;
  column?: number;
};

export type Column = {
  id?: number;
  name: string;
}

export type FetchAll = {
  type: typeof FETCH_ALL;
};

export type FetchById = {
  type: typeof FETCH_BY_ID;
};

export type Create = {
  type: typeof CREATE;
};

export type Update = {
  type: typeof UPDATE;
};

export type Delete = {
  type: typeof DELETE;
};

export type Fail = {
  type: typeof FAIL;
};

export type Success = {
  type: typeof SUCCESS;
  payload?: Array<Task> | Array<Column> | Task | Column;
};

export type DispatchTypes =
  | FetchAll
  | FetchById
  | Fail
  | Create
  | Update
  | Delete
  | Success;
