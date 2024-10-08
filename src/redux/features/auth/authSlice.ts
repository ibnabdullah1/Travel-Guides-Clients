import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TAuthState {
  user?: TUser | null | undefined;
  token?: string | null;
}

export type TUser = {
  _id: string;
  name: string;
  profileUrl: string;
  email: string;
  role: string;
  isPremium: boolean;
  iat: number;
  exp: number;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setProfile: (state, action) => {
      if (state.user) {
        state.user.profileUrl = action.payload;
      }
    },
    setPremium: (state, action) => {
      if (state.user) {
        console.log(action.payload);
        state.user.isPremium = action.payload;
      }
    },
  },
});

export const { setUser, logout, setProfile, setPremium } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
