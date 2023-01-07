import { createSlice } from "@reduxjs/toolkit";
import usersData from "../../initData.json";

export type TUser = {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
};

type TUsersState = {
  users: TUser[];
  count: number;
};

export const initialState: TUsersState = {
  users: usersData,
  count: 3,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setCount: (state: TUsersState, actions: { payload: number }) => {
      state.count = actions.payload;
    },
  },
});

export const { setCount } = usersSlice.actions;
export default usersSlice.reducer;
