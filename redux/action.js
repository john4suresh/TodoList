import { ADD_TODO, REMOVE_TODO } from "./type";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: item,
});

export const removeTodo = (item) => ({
  type: REMOVE_TODO,
  payload: item,
});
