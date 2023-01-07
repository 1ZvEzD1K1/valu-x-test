import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import usersReducer from './slices/users';

const rootReducer = combineReducers({
    users: usersReducer,
});

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store