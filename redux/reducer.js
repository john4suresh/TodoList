import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./type";

const INITIAL_STATE = {
  todoList: [],
  edit: {},
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      let editTodo = state.todoList.filter(
        (item) => item.id === action.payload.id
      );
      console.log(editTodo);
      if (editTodo.length > 0) {
        return {
          ...state,
          todoList: state.todoList.map((item) =>
            item.id === editTodo[0].id
              ? {
                  id: action.payload.id,
                  title: action.payload.title,
                  subTitle: action.payload.subTitle,
                  description: action.payload.description,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              id: state.todoList.length + 1,
              title: action.payload.title,
              subTitle: action.payload.subTitle,
              description: action.payload.description,
            },
          ],
        };
      }
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case EDIT_TODO:
      return { ...state, edit: action.payload };
    default:
      return state;
  }
};
