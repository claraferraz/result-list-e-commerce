import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface AuthState {
  token?: string;
}

const initialState: AuthState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
      state.token = token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAuth = (state: RootState) => state.auth.token;
