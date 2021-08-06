import { ADD_TODO, REMOVE_TODO } from "./type";

const INITIAL_STATE = [];

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          key: state.length + 1,
          title: action.payload.title,
          subTitle: action.payload.subTitle,
          description: action.payload.description,
        },
      ];
    case REMOVE_TODO:
      return state.filter((item) => item.key !== action.payload);
    default:
      return state;
  }
};
