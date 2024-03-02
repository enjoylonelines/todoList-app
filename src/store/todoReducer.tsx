import { createReducer, createAction } from '@reduxjs/toolkit';
import { Todo } from '../types/types';

export const addTodo = createAction<Todo>('addTodo');
export const removeTodo = createAction<string>('removeTodo');

const initialState: Todo[] = [];

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.push(action.payload);
  });
  builder.addCase(removeTodo, (state, action) => {
    return state.filter(todo => todo.id !== action.payload);
  });
});

export default todoReducer;
