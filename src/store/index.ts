import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/ToDoList/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
