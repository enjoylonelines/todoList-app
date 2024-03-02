import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

// configureStore 함수를 사용하여 스토어를 생성합니다.
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});


