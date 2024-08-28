import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export interface AuthState {
  token?: string;
  user: {
    username: string;
    email: string;
  };
}

const initialState: AuthState = {
  token: "",
  user: {
    username: "",
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload: token }: PayloadAction<string>) => {
      state.token = token;
    },
    setUserData: (state, { payload }: PayloadAction<AuthState>) => {
      state.user = {
        username: payload.user.username,
        email: payload.user.email,
      };
    },
    logout: (state) => {
      state.token = "";
      state.user.username = "";
      state.user.email = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUserData, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const seleCurrentUser = (state: RootState) => state.auth.user;
